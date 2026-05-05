const CACHE_NAME = 'ativcomp-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './global.css',
  './script.js',
  './api.js',
  './administracao.html',
  './area-aluno.html',
  './alunos.html',
  './cursos.html',
  './dashbord.html',
  './solicitacoes.html',
  './teladelogin.html',
  './icons/icon-128.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Deixa chamadas à API sempre ir para a rede (sem cache)
  if (event.request.url.includes('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
