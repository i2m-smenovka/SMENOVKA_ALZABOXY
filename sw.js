/* Smenovka – pomocný skript appky: pamätá si len obal (stránku, ikony), aby sa appka otvorila hneď.
   Údaje smenovky sa sem neukladajú – tie sú stále v Google Sheete a na Google Disku. */
const VERZIA = 'smenovka-obal-4';
const SUBORY = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './logo-i2m.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERZIA).then(c => c.addAll(SUBORY)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERZIA).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;   // smenovku (Google) neriešiť – ide vždy naživo
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERZIA).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
