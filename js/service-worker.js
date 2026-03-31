/*Instalando app*/
self.addEventListener("install", (event) => {
  event.waitUntil(
    /*Cria "armario" para guardar arquivos*/
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

/*verifica se algo que está sendo carregado já foi salvo antes*/
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});