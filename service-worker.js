self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('wrinima-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'favicon.ico'
        /* Agrega aquí cualquier otro recurso que desees cachear */
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
