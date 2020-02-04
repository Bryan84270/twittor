
// Ciclo de vida del SW

self.addEventListener('install', event => {
    //Dscargar assets
    //Creamos un cache
    //console.log(event)
    console.log('Instalando SW!')
    //self.skipWaiting()      //Saltar tiempo de activacion!

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 100)

    })

    event.waitUntil(instalacion);

})


self.addEventListener('activate', event => {

//Borrar Cacheviejo

console.log('SW: Activo!')

})


//FETCH: MAnejo de peticiones HTTP

self.addEventListener('fetch', event =>{

    //Aplicar estrategias del cache

    // console.log('SW:', event.request.url);

    //     if(event.request.url.includes('https://reqres.in/')){
    //         const resp = new Response(`{Ok: false, mensaje: 'jaj'}`);

    //         event.respondWith(resp);
    //     }

})


//SYNC: REcuperamos la conexion a internet

self.addEventListener('sync', event =>{

    console.log('Tenemos Conexion!');
    console.log(event);
    console.log(event.tag);

})


// PUSH: Manejar las push notificaciones

self.addEventListener('push', event => {

    console.log('Notificacion recibida')
            

})
