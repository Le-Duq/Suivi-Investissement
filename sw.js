
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('invest-cache').then(cache => {
            return cache.addAll([
                'index.html',
                'manifest.json',
                'sw.js',
                'https://cdn.jsdelivr.net/npm/chart.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
