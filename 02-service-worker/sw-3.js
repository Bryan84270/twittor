self.addEventListener('fetch', event => {

    if(event.request.url.includes('jpg')){
        let newImagen = fetch('img/main-patas-arriba.jpg');

// console.log(event.request.url)
        event.respondWith(newImagen)
    }

})