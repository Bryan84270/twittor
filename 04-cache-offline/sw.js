const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';

const CACHE_DYNAMIC_LIMIT = 50;




function limpiarCache(cacheName, numeroItems){

caches.open( cacheName )
.then( cache =>{

    return cache.keys()
        .then( keys => {
            //console.log(keys)



            if(keys.length > numeroItems){
                cache.delete(keys[0])
                .then(limpiarCache(cacheName,numeroItems))
            }

        })


})


}




self.addEventListener('install', e => {

    const cachesProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => {

            return cache.addAll([
                '../04-cache-offline/',
                '../04-cache-offline/index.html',
                '../04-cache-offline/css/style.css',
                '../04-cache-offline/img/main.jpg',
                '../04-cache-offline/img/no-image.jpg',
                '../04-cache-offline/js/app.js',
                

            ])

        })

        const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => {

            return cache.addAll([
               
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',

            ])

        })


    e.waitUntil([cachesProm,cacheInmutable])

})

 



self.addEventListener('fetch', e =>{

    // 5-Cache y Network Race

const respuesta = new Promise( (resolve, reject) => {

    let rechazada = false;

    const  falloUnaVez = () =>{
        if (rechazada ){

            if(/\.(png|jpg)$/i.test(e.request.url)){
                resolve(caches.match('../04-cache-offline/img/no-image.jpg'))
            }else{
                reject('No se econtro respuesta')
            }

        }else{
            rechazada =true;
        }
    }


    fetch(e.request).then( res => {
    res.ok ? resolve(res) : falloUnaVez();
    }).catch(falloUnaVez)

    caches.match(e.request).then(res => {
        res ? resolve(res) : falloUnaVez();
    }).catch(falloUnaVez);


});

e.respondWith(respuesta)




// 4-Cache with network update
// Redimiento es critico
// Las Actualizaciones siempre estarn un paso atras

// if(e.request.url.includes('bootstrap')){
//     return e.respondWith(caches.match(e.request));
// }

// const respuesta = caches.open(CACHE_STATIC_NAME).then(cache =>{
    
//     fetch(e.request).then( newRes =>
//         cache.put(e.request,newRes));

//         return cache.match( e.request )
// })




// e.respondWith(respuesta)





//    //3-Network with cache falback


//    const respuesta = fetch(e.request).then(res =>{

// if(!res)return caches.match(e.request);


// console.log('Fetch',res);

//         caches.open(CACHE_DYNAMIC_NAME)
//             .then(cache =>{
//                 cache.put(e.request,res)
//                 limpiarCache(CACHE_DYNAMIC_NAME,CACHE_DYNAMIC_LIMIT);
//             });




//         return res.clone();

//     }).catch( err => {
//         return caches.match(e.request);
//     })



//         e.respondWith( respuesta )




    // //2- Primero cache si falla ve ala red
    //  const respuesta = caches.match( e.request )
    //     .then(res => {
    //         if( res ) return res ;

    //         //si no existe ve ala red
    //         console.log('No existe', e.request.url)

    //         return fetch(e.request)
    //                 .then(newResponse =>{

    //                         caches.open( CACHE_DYNAMIC_NAME )
    //                             .then( cache => {
    //                             cache.put( e.request, newResponse );
    //                             limpiarCache(CACHE_DYNAMIC_NAME,50)
    //                         });

    //                     return newResponse.clone();
    //                 });
    //     })

        // e.respondWith( respuesta)



        



    //1-Cache Only
  //  e.respondWith( caches.match( e.request ) )




})