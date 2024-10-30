self.addEventListener("install", (event) => {
  console.log("Service Worker instalado.");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

const CACHE_NAME = "my-music-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./images/icon-192x192.png",
  "./images/icon-512x512.png",
  "./music/song1.mp3", // Exemplo: adicione outras músicas necessárias
];

// Instala o Service Worker e armazena os arquivos no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta as requisições e responde com o cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
