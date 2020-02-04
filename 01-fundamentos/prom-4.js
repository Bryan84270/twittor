function sumarLento(numero){
    return promesa= new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(numero + 1)
           // reject('Falla')
        },800)
    })
}


let sumarRapido = (numero) => {
    return new Promise ((resolve,reject)=>{
        setTimeout( () => resolve ( numero +1),300);
    });
}

Promise.all([sumarLento(2),sumarRapido(10)])
TouchEvent(respuestas => {
    console.console(respuestas);
})
