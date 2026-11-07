// Tryb offline: aplikacja działa na siłowni nawet bez zasięgu.
// Przy każdej nowej wersji aplikacji zmień numer poniżej.
const CACHE = 'trening-v1.2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('trening-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function withTimeout(ms, promise) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then((v) => { clearTimeout(t); resolve(v); }, (err) => { clearTimeout(t); reject(err); });
  });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // Dziennik zadań (podfolder /dziennik/) ma własny service worker — nie mieszamy jego plików z Treningiem.
  if (url.pathname.startsWith(new URL('./dziennik/', self.location).pathname)) return;

  // Strona główna: najpierw sieć (żeby szybko łapać nowe wersje), przy słabym zasięgu kopia z telefonu.
  if (req.mode === 'navigate') {
    e.respondWith(
      withTimeout(2500, fetch(req))
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put('./index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html').then((m) => m || caches.match('./')))
    );
    return;
  }

  // Ikony i manifest: z pamięci telefonu, a gdy ich brak — z sieci.
  e.respondWith(
    caches.match(req).then((m) => m || fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }))
  );
});
