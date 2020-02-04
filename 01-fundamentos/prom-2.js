
function sumarUno(numero){

        var promesa = new Promise(function(resolve,reject)    {
            console.log(numero)

                if(numero >= 7){
                    reject('Numero Alto');
                }

            setTimeout(function(){     
       
               resolve(numero + 1);
            },800);

        })

return promesa;

}

sumarUno(5)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.catch(error => {
    console.log('Error en promise')
    console.log(error)
})
/*
sumarUno(5).then(nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero)
})
.then(nuevoNumero => {
    console.log(nuevoNumero);
})
*/