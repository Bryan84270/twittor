self.addEventListener('fetch', event => {

    // if( event.request.url.includes('style.css')){
    //     event.respondWith( null )
    // }else {
        
    //     event.respondWith( fetch ( event.request))
    // }

    console.log(event)
    // console.log(event.request.url.includes('css'))
    // console.log(event.request.url)
    // console.log(event.request.credentials)


    if( event.request.url.includes('jpg')){
        console.log(event.request.url)

        //let fotoReq = fetch('img/main.jpg')
        // let fotoReq = fetch(event.request.url)
        let fotoReq = fetch(event.request)

        event.respondWith( fotoReq )
    }
    

})