# Prawko – teoria na prawo jazdy

Aplikacja webowa (PWA, działa offline) do nauki teorii na prawo jazdy. Adres: `…/prawko/`.
Na iPhonie: Safari → Udostępnij → „Do ekranu początkowego”.

## Co zawiera

- **Nauka** pytań: po kolei, losowo, nowe, do powtórki, nieopanowane i ulubione, z filtrami części (TAK/NIE, A/B/C), tematu i multimediów. Po każdej odpowiedzi pojawia się objaśnienie i link do przepisu.
- **Egzamin próbny** jak egzamin państwowy:
  - 32 pytania (20 podstawowych i 12 specjalistycznych), 74 pkt, próg 68 pkt;
  - limity czasu 20 s + 15 s oraz 50 s, bez powrotu do pytań;
  - historia wyników i przegląd odpowiedzi.
- **Przepisy**: 19 rozdziałów z opisem zasad, praw i obowiązków (PoRD), rysunki znaków i wyszukiwarka.
- **Statystyki**: opanowanie pytań, postęp według tematów, aktywność, seria dni.
- **Kopia zapasowa** postępu (eksport i import pliku JSON).

## Bazy pytań

| Plik | Opis |
|---|---|
| `data/pytania-wlasne.json` | 200 pytań autorskich z objaśnieniami (źródło: `tools/pytania_wlasne.py`). **To nie są pytania z oficjalnej bazy.** |
| `data/baza.json` + `data/media/` | Oficjalna baza Ministerstwa Infrastruktury po konwersji. Nie jest dołączona do repozytorium. Dodaje się ją jednym z dwóch sposobów poniżej. |
| `data/bazy.json` | Lista baz widocznych w aplikacji. |

### Sposób 1: import w aplikacji (bez komputera)

1. Pobierz z gov.pl plik bazy pytań (.xlsx). Znajdziesz go na stronie Ministerstwa Infrastruktury, w sekcji „Prawo jazdy” → baza pytań egzaminacyjnych.
2. W aplikacji wybierz Więcej → Baza pytań → **Importuj plik bazy**.
3. Opcjonalnie wybierz **Importuj multimedia**: rozpakowane zdjęcia i filmy MP4. Safari nie odtwarza filmów WMV.

Baza i multimedia zapisują się tylko w pamięci tego telefonu (IndexedDB).

### Sposób 2: dołączenie bazy do aplikacji (dla wszystkich urządzeń)

```bash
pip install openpyxl pillow      # oraz ffmpeg do filmów
python3 prawko/tools/import_baza.py BAZA.xlsx --media MULTIMEDIA.zip --kategorie B
```

Skrypt:

- zapisuje `data/baza.json`;
- zmniejsza zdjęcia do WebP, a filmy do MP4 (H.264, 480p) w `data/media/`;
- dopisuje bazę do `data/bazy.json`.

Opcja `--kategorie B` zostawia tylko pytania kategorii B, dzięki czemu repozytorium jest mniejsze. Bez `--media` powstaje sama treść pytań.

Kolumny arkusza są rozpoznawane po nazwach nagłówków: „Numer pytania”, „Pytanie”, „Odpowiedź A–C”, „Poprawna odp”, „Media”, „Zakres struktury”, „Liczba punktów”, „Kategorie”, „Źródło pytania” i inne. Drobne zmiany w kolejnych wersjach pliku nie przeszkadzają.

## Pliki

- `index.html`: cała aplikacja (UI i logika).
- `przepisy.js`: treść rozdziału Przepisy.
- `znaki.js`: rysunki znaków (SVG).
- `sw.js`: tryb offline. **Po każdej zmianie podbij numer `CACHE`.**
- `lib/xlsx.mini.min.js`: SheetJS (Apache-2.0, `lib/LICENSE-xlsx.txt`), wczytywany tylko przy imporcie.

Opracowanie przepisów ma charakter edukacyjny. Wiążący jest aktualny tekst ustaw (isap.sejm.gov.pl).
