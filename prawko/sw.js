// Tryb offline: nauka działa także bez zasięgu.
// Przy każdej nowej wersji aplikacji zmień numer poniżej.
const CACHE = 'prawko-v1.0';
const MEDIA_CACHE = 'prawko-media-v1';
const ASSETS = ['./', './index.html', './znaki.js', './przepisy.js', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png',
  './data/bazy.json', './data/pytania-wlasne.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('prawko-') && k !== CACHE && k !== MEDIA_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function withTimeout(ms, promise) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then((v) => { clearTimeout(t); resolve(v); }, (err) => { clearTimeout(t); reject(err); });
  });
}

function networkFirst(req, key) {
  return withTimeout(3000, fetch(req))
    .then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(key || req, copy)); }
      return res;
    })
    .catch(() => caches.match(key || req, { ignoreSearch: true }).then((m) => m || caches.match('./index.html')));
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const path = url.pathname;
  const scope = new URL('./', self.location).pathname;

  // Strona, skrypty z treścią i bazy pytań: najpierw sieć (szybko łapiemy nowe wersje), bez zasięgu – kopia z telefonu.
  if (req.mode === 'navigate') { e.respondWith(networkFirst(req, './index.html')); return; }
  if (/\.(js|json)$/.test(path) && !path.startsWith(scope + 'lib/')) { e.respondWith(networkFirst(req)); return; }

  // Zdjęcia i filmy z bazy: z pamięci telefonu, a przy pierwszym użyciu z sieci (zapisywane do osobnej pamięci).
  if (path.startsWith(scope + 'data/media/')) {
    if (req.headers.has('range')) return; // filmy z żądaniem zakresu obsługuje przeglądarka
    e.respondWith(caches.open(MEDIA_CACHE).then((c) => c.match(req).then((m) => m || fetch(req).then((res) => {
      if (res && res.ok && res.status === 200) c.put(req, res.clone());
      return res;
    }))));
    return;
  }

  // Ikony, manifest i biblioteka importu: z pamięci telefonu, a gdy ich brak – z sieci.
  e.respondWith(
    caches.match(req).then((m) => m || fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
