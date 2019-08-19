self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/web/',
       '/web/index.html',
       '/web/Gugi-Regular.ttf',
       '/web/TAM6.TTF',
       '/web/kalanjiyam.vcf',
       '/web/img/icon.png',
       '/web/img/kalanjiyam-logo.png',
       '/web/img/triangle_pattern.png',
       '/web/img/kalanjiyam-logo.svg',
       '/web/img/user.png',
	   '/web/img/whatsapp-icon-square.svg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
