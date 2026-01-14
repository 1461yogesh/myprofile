self.addEventListener("install",e=>{
e.waitUntil(
caches.open("portfolio").then(cache=>{
return cache.addAll([
"index.html",
"about.html",
"projects.html",
"contact.html",
"style.css",
"main.js"
]);
})
);
});
