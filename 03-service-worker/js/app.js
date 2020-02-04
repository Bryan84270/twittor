

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('../03-service-worker/sw.js')

        .then( reg =>{

            // setTimeout(() =>{
            //     reg.sync.register('posteo-fotos');
            //     console.log('Posteo Completo')
            // }, 3000)
            
            
                    Notification.requestPermission().then(result => {
            
                        console.log(result)
                        reg.showNotification('Hola mundo!')
            
                    })
        })

}

