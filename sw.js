const V='pp-v70',ML=['cdn.jsdelivr.net','storage.googleapis.com'],A=['./','./index.html','./studio3d.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=='pp-ml').map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
if(ML.includes(u.host)){e.respondWith(caches.open('pp-ml').then(async c=>{const m=await c.match(e.request);if(m)return m;const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r}));return}
if(u.origin!==self.location.origin)return;
e.respondWith(caches.open(V).then(async c=>{const m=await c.match(e.request,{ignoreSearch:true});const n=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>m||c.match('./index.html'));return m||n}))});
