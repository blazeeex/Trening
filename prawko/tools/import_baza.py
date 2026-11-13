#!/usr/bin/env python3
"""Konwerter oficjalnej bazy pytań egzaminacyjnych (Ministerstwo Infrastruktury) do formatu aplikacji.

Bazę publikuje Ministerstwo Infrastruktury na gov.pl (Prawo jazdy → baza pytań egzaminacyjnych):
plik arkusza (.xlsx) z treścią pytań oraz osobna paczka multimediów (zdjęcia i filmy).

Użycie:
  python3 tools/import_baza.py BAZA.xlsx
  python3 tools/import_baza.py BAZA.xlsx --media MULTIMEDIA.zip --kategorie B
  python3 tools/import_baza.py BAZA.xlsx --media katalog_z_plikami/ --jobs 4

Wynik (w katalogu data/ obok aplikacji):
  data/baza.json      – pytania w formacie aplikacji
  data/media/…        – zdjęcia (.webp) i filmy (.mp4, H.264) zmniejszone do odtwarzania w telefonie
  data/bazy.json      – lista baz dostępnych w aplikacji (dopisuje oficjalną bazę)

Wymagania: openpyxl, Pillow (z obsługą WebP); do filmów ffmpeg.
"""
import argparse, concurrent.futures as cf, datetime as dt, json, os, re, shutil, subprocess, sys, tempfile, threading, unicodedata, zipfile

IMG = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.tif', '.tiff'}
VID = {'.wmv', '.mp4', '.avi', '.mov', '.m4v', '.mpg', '.mpeg', '.webm', '.mkv'}
LANG = re.compile(r'\b(eng|en|ang|angielski|de|niem|niemiecki|ua|ukr|ukrainski|ru)\b')


def norm(s):
    s = str(s or '').replace('ł', 'l').replace('Ł', 'L')
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9]+', ' ', s)).strip()


def map_columns(header):
    """Dopasowuje kolumny po nazwach nagłówków (odporne na drobne zmiany w kolejnych wersjach pliku)."""
    h = [norm(x) for x in header]
    col = {}

    def first(pred):
        for i, x in enumerate(h):
            if x and pred(x):
                return i
        return None

    col['id'] = first(lambda x: x in ('numer pytania', 'nr pytania', 'numer', 'id pytania') or x.startswith('numer pytania'))
    col['t'] = first(lambda x: x == 'pytanie')
    if col['t'] is None:
        col['t'] = first(lambda x: (x.startswith('pytanie') or x.startswith('tresc pytania')) and not LANG.search(x))
    for L in 'abc':
        col[L] = first(lambda x, L=L: (x in (f'odpowiedz {L}', f'odp {L}', f'odpowiedz {L} pl')) or
                       (re.match(rf'^odp\w* {L}\b', x) and not LANG.search(x)))
    col['k'] = first(lambda x: x.startswith('poprawna'))
    col['m'] = first(lambda x: x in ('media', 'multimedia', 'plik', 'nazwa pliku') or x.startswith('media'))
    col['s'] = first(lambda x: 'zakres' in x)
    col['p'] = first(lambda x: 'punkt' in x or x == 'waga')
    col['c'] = first(lambda x: 'kategori' in x)
    col['src'] = first(lambda x: 'zrodlo' in x)
    col['why'] = first(lambda x: 'o co chcemy' in x)
    col['safe'] = first(lambda x: 'zwiazek' in x)
    return col


def find_header(rows, limit=15):
    for i, row in enumerate(rows[:limit]):
        if any(norm(c) == 'pytanie' or norm(c).startswith('numer pytania') for c in row):
            return i
    raise SystemExit('Nie znaleziono wiersza nagłówka z kolumną „Pytanie” – czy to na pewno plik bazy pytań?')


def cell(row, i):
    if i is None or i >= len(row):
        return ''
    v = row[i]
    if v is None:
        return ''
    if isinstance(v, float) and v.is_integer():
        v = int(v)
    return str(v).strip()


def parse_rows(rows):
    hi = find_header(rows)
    col = map_columns(rows[hi])
    missing = [k for k in ('id', 't', 'k') if col.get(k) is None]
    if missing:
        raise SystemExit(f'Brak wymaganych kolumn: {missing}. Nagłówki: {rows[hi]}')
    out, seen = [], set()
    for row in rows[hi + 1:]:
        qid, t = cell(row, col['id']), cell(row, col['t'])
        if not qid or not t:
            continue
        if qid in seen:
            continue
        seen.add(qid)
        a = [cell(row, col[L]) for L in 'abc']
        k = norm(cell(row, col['k'])).upper()
        k = {'TAK': 'T', 'NIE': 'N'}.get(k, k[:1])
        zak = norm(cell(row, col['s']))
        s = 'S' if zak.startswith('spec') else 'P' if zak.startswith('podst') else ('S' if any(a) else 'P')
        if s == 'S' and k not in ('A', 'B', 'C'):
            continue
        if s == 'P' and k not in ('T', 'N'):
            continue
        try:
            p = int(float(cell(row, col['p']) or 1))
        except ValueError:
            p = 1
        q = {'id': qid, 's': s, 'p': max(1, min(3, p)), 't': t, 'k': k}
        if s == 'S':
            q['a'] = a
        m = cell(row, col['m'])
        if m and norm(m) not in ('', 'brak', 'none'):
            q['m'] = os.path.basename(m.replace('\\', '/'))
        cats = [c for c in re.split(r'[\s,;/]+', cell(row, col['c']).upper()) if c]
        if cats:
            q['c'] = cats
        for key in ('src', 'why', 'safe'):
            v = cell(row, col[key])
            if v:
                q[key] = v
        out.append(q)
    return out


def read_xlsx(path):
    import openpyxl
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    best = None
    for ws in wb.worksheets:
        rows = [list(r) for r in ws.iter_rows(values_only=True)]
        try:
            qs = parse_rows(rows)
        except SystemExit:
            continue
        if not best or len(qs) > len(best):
            best = qs
    if not best:
        raise SystemExit('Żaden arkusz nie zawiera pytań.')
    return best


class MediaSource:
    """Indeks plików multimediów w archiwum ZIP lub katalogu (dopasowanie po nazwie bez rozszerzenia)."""

    def __init__(self, path):
        self.zip = None
        self.idx = {}
        if os.path.isdir(path):
            for root, _, files in os.walk(path):
                for f in files:
                    self._add(f, os.path.join(root, f))
        else:
            self.zip = zipfile.ZipFile(path)
            for n in self.zip.namelist():
                if not n.endswith('/'):
                    self._add(os.path.basename(n), n)

    def _add(self, name, ref):
        stem, ext = os.path.splitext(name.lower())
        if ext in IMG or ext in VID:
            # Preferuj mp4 przed wmv, gdy w paczce są oba warianty.
            prev = self.idx.get(stem)
            if prev is None or (ext == '.mp4' and not prev[1].endswith('.mp4')):
                self.idx[stem] = (ref, ext)

    def find(self, name):
        return self.idx.get(os.path.splitext(name.lower())[0])

    def materialize(self, ref, tmpdir):
        if not self.zip:
            return ref
        dest = os.path.join(tmpdir, re.sub(r'[^\w.-]', '_', os.path.basename(ref)))
        with self.zip.open(ref) as src, open(dest, 'wb') as out:
            shutil.copyfileobj(src, out)
        return dest


def convert_image(src, dest, width, quality):
    from PIL import Image
    with Image.open(src) as im:
        im = im.convert('RGB')
        if im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        im.save(dest, 'WEBP', quality=quality, method=6)


def convert_video(src, dest, height, crf):
    cmd = ['ffmpeg', '-v', 'error', '-y', '-i', src, '-an',
           '-vf', f"scale=-2:'min({height},ih)'", '-c:v', 'libx264', '-preset', 'medium', '-crf', str(crf),
           '-pix_fmt', 'yuv420p', '-movflags', '+faststart', dest]
    subprocess.run(cmd, check=True)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('xlsx', help='plik bazy pytań (.xlsx) z gov.pl')
    ap.add_argument('--media', help='paczka multimediów: archiwum .zip albo katalog z plikami')
    ap.add_argument('--out', default=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data'))
    ap.add_argument('--kategorie', help='zostaw tylko pytania tych kategorii, np. "B" albo "A,B"')
    ap.add_argument('--wersja', help='opis wersji bazy (domyślnie z nazwy pliku)')
    ap.add_argument('--jobs', type=int, default=os.cpu_count() or 2)
    ap.add_argument('--img-width', type=int, default=960)
    ap.add_argument('--img-quality', type=int, default=70)
    ap.add_argument('--video-height', type=int, default=480)
    ap.add_argument('--video-crf', type=int, default=30)
    args = ap.parse_args()

    qs = read_xlsx(args.xlsx)
    if args.kategorie:
        want = {c.strip().upper() for c in args.kategorie.split(',') if c.strip()}
        qs = [q for q in qs if not q.get('c') or want & set(q['c'])]
    out = os.path.normpath(args.out)
    os.makedirs(out, exist_ok=True)

    media_dir = None
    if args.media:
        src = MediaSource(args.media)
        media_dir = os.path.join(out, 'media')
        os.makedirs(media_dir, exist_ok=True)
        jobs, missing = [], []
        for q in qs:
            if not q.get('m'):
                continue
            hit = src.find(q['m'])
            if not hit:
                missing.append(q['m'])
                continue
            ref, ext = hit
            stem = re.sub(r'[^\w.-]', '_', os.path.splitext(q['m'])[0])
            new = stem + ('.webp' if ext in IMG else '.mp4')
            q['m'] = new
            jobs.append((ref, ext, os.path.join(media_dir, new)))
        uniq = {d: (r, e) for r, e, d in jobs}
        tmp = tempfile.mkdtemp(prefix='prawko-media-')
        zip_lock = threading.Lock()  # odczyt z ZIP nie jest bezpieczny wielowątkowo

        def work(item):
            dest, (ref, ext) = item
            if os.path.exists(dest) and os.path.getsize(dest) > 0:
                return dest, 'pominięto (istnieje)'
            with zip_lock:
                path = src.materialize(ref, tmp)
            try:
                if ext in IMG:
                    convert_image(path, dest, args.img_width, args.img_quality)
                else:
                    convert_video(path, dest, args.video_height, args.video_crf)
            finally:
                if src.zip and os.path.exists(path):
                    os.remove(path)
            return dest, 'ok'

        done = 0
        with cf.ThreadPoolExecutor(max_workers=max(1, args.jobs)) as ex:
            for dest, status in ex.map(work, uniq.items()):
                done += 1
                if done % 50 == 0 or done == len(uniq):
                    print(f'  multimedia: {done}/{len(uniq)}', file=sys.stderr)
        shutil.rmtree(tmp, ignore_errors=True)
        if missing:
            print(f'Uwaga: brak {len(missing)} plików multimediów w paczce, np. {missing[:5]}', file=sys.stderr)
        # Pytania, dla których nie znaleziono pliku, zachowują oryginalną nazwę – aplikacja pokaże informację o braku.

    wersja = args.wersja or os.path.splitext(os.path.basename(args.xlsx))[0]
    meta = {
        'nazwa': 'Oficjalna baza pytań egzaminacyjnych',
        'opis': 'Baza pytań Ministerstwa Infrastruktury (gov.pl).',
        'oficjalna': True,
        'wersja': wersja,
        'wygenerowano': dt.date.today().isoformat(),
        'media': 'media/' if media_dir else None,
    }
    with open(os.path.join(out, 'baza.json'), 'w', encoding='utf-8') as f:
        json.dump({'meta': meta, 'q': qs}, f, ensure_ascii=False, separators=(',', ':'))

    man_path = os.path.join(out, 'bazy.json')
    try:
        with open(man_path, encoding='utf-8') as f:
            man = json.load(f)
    except (OSError, ValueError):
        man = {'bazy': []}
    man['bazy'] = [b for b in man.get('bazy', []) if b.get('id') != 'oficjalna']
    man['bazy'].insert(0, {'id': 'oficjalna', 'plik': 'baza.json', 'nazwa': meta['nazwa'], 'oficjalna': True,
                           'wersja': wersja, 'liczba': len(qs)})
    if not any(b.get('id') == 'wlasne' for b in man['bazy']):
        man['bazy'].append({'id': 'wlasne', 'plik': 'pytania-wlasne.json', 'nazwa': 'Pytania autorskie z objaśnieniami', 'oficjalna': False})
    with open(man_path, 'w', encoding='utf-8') as f:
        json.dump(man, f, ensure_ascii=False, indent=1)

    p = sum(1 for q in qs if q['s'] == 'P')
    print(f'Zapisano {len(qs)} pytań ({p} podstawowych, {len(qs) - p} specjalistycznych) do {out}/baza.json', file=sys.stderr)


if __name__ == '__main__':
    main()
