self.addEventListener('fetch', event => {

  event.respondWith(
      fetch(event.request)
        .catch( error => {
            console.log('Error en:', event.request.url)
        })
  
  
  
      );





});