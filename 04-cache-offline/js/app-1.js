

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('../04-cache-offline/sw.js');
}



if(window.caches){

//Comprobar abrir si no se abres crealo
caches.open('prueba-1')
caches.open('prueba-2')

//Comprobar si existe
    // caches.has('prueba-2').then( console.log  )

//Elimina el cache
    // caches.delete('prkueba-1').then( console.log )

//Crea el archvio de cache y especifica lo que se puede hacer con el y/o en el
caches.open('cache-v1.1').then( cache =>{

    cache.add('../04-cache-offline/index.html')

    cache.addAll([
        '../04-cache-offline/index.html',
        '../04-cache-offline/css/style.css',
        '../04-cache-offline/img/main.jpg',
        
        
    ]).then(() => {
        
        
        //cache.delete('../04-cache-offline/css/style.css')


        cache.put('index.html', new Response('Hola Mundo '))
    })

// cache.match('../04-cache-offline/index.html')
// .then( res =>{

//     res.text().then(console.log)

// })


})


caches.keys().then(keys =>{
    console.log(keys)
})

}



