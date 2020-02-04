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


function returnTrue (){
    return true;
}

let cosas =[sumarRapido(10),sumarLento(5),true,'hola mundo',returnTrue()]



Promise.all(cosas)
.then(respuestas =>{
    console.log(respuestas)
})
.catch(console.log)

// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);