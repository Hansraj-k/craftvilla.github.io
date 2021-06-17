self.addEventListener("install", e => {
    e.waitUntill(
        caches.open("static").then(cache => {
            return cache.addAll(["style.css","p404.png"]);
        })
    )
});
