/* Smenovka – pomocný skript appky: pamätá si obal (stránku, ikony), aby sa appka otvorila hneď,
   a prijíma upozornenia (Firebase Cloud Messaging), aj keď je appka zavretá.
   Údaje smenovky sa sem neukladajú – tie sú stále v Google Sheete a na Google Disku. */
const VERZIA = 'smenovka-obal-5';
const SUBORY = ['./', './index.html', './manifest.webmanifest', './push-config.js', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './logo-i2m.png'];
try { importScripts('push-config.js'); } catch (e) {}
if (self.FIREBASE_CONFIG && self.VAPID_KEY) {
  try {
    importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js', 'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
    firebase.initializeApp(self.FIREBASE_CONFIG);
    firebase.messaging();   // upozornenia s „notification“ zobrazí sám
  } catch (e) {}
}
self.addEventListener('install', e => { e.waitUntil(caches.open(VERZIA).then(c => c.addAll(SUBORY)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERZIA).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== 'GET') return;   // smenovka (Google) ide vždy naživo
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERZIA).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
/* ťuknutie na upozornenie: prepnúť do otvorenej appky, inak ju otvoriť */
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.indexOf(self.registration.scope) === 0 && 'focus' in c) return c.focus(); }
    return self.clients.openWindow(self.registration.scope);
  }));
});
