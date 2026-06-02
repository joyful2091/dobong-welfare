self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // 안드로이드 크롬의 PWA 앱 설치 조건을 충족하기 위한 필수 빈 이벤트
});