self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/kalanjiyam/',
       '/kalanjiyam/index.html',
       '/kalanjiyam/Gugi-Regular.ttf',
       '/kalanjiyam/TAM6.TTF',
       '/kalanjiyam/kalanjiyam.vcf',
       '/kalanjiyam/img/icon.png',
       '/kalanjiyam/img/kalanjiyam-logo.png',
       '/kalanjiyam/img/triangle_pattern.png',
       '/kalanjiyam/img/kalanjiyam-logo.svg',
       '/kalanjiyam/img/user.png'
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
