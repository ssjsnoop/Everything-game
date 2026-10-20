/* EVERYTHING: GitHub Pages install + offline support. Bump cache with each new release. */
const CACHE='everything-living-universe-install-1';
const PRECACHE=['./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(PRECACHE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('everything-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  // Service worker scope is relative, including project-name GitHub Pages.
  if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{
      if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));}
      return response;
    }).catch(async()=>await caches.match('./index.html')||Response.error()));
    return;
  }
  event.respondWith(caches.match(request).then(hit=>hit||fetch(request).then(response=>{
    if(response.ok&&url.pathname.match(/\.(?:png|webmanifest)$/)){
      const copy=response.clone();caches.open(CACHE).then(c=>c.put(request,copy));
    }
    return response;
  })));
});
