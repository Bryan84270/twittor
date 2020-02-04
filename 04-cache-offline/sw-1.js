


self.addEventListener('fetch', event =>{

// const offlineResp = new Response(`

// Respuesta regresada

// por el SW, cuando no hay conexion a internet


// `)

// const offlineResp = new Response(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Mi PWA</title>
    
// </head>
// <body class="container p-3">


// <h1>Offline mode</h1>
// <hr>

// <p>
//     Las PWAs son el siguiente paso a las páginas y aplicaciones web.
// </p>


// </body>
// </html>
// `,{
//     headers:{
//         'Content-type':'text/html'

//     }
// })

const offlineResp = fetch( 'pages/offline.html')



const resp = fetch(event.request)
            .catch(()=> caches.open('../04-cache-offline/index.html')
              )


event.respondWith(resp)

})