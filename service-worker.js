self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('simple-orange-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/images/icon-192x192.png',
          '/images/icon-512x512.png',
          '/ebook.pdf'  // Asegúrate de que el archivo esté disponible en este path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  