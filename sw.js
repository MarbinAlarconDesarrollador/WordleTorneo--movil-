const CACHE_NAME = 'wordle-pro-v2'; // Cambiamos a v2 para refrescar la caché
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './img/logo.png' // Si solo tienes este, deja solo este.
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Usamos un bucle para que si un archivo falla, no rompa todo
      return Promise.all(
        ASSETS.map(url => {
          return cache.add(url).catch(err => console.log("Fallo al cargar:", url));
        })
      );
    })
  );
});