//Peticion POST
// https://reqres.in/api/users




let usuario = {
    nombre: 'Fernando',
    edad:32
};

fetch('https://reqres.in/api/user',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json())
.then( console.log )
.catch( error => {
    console.log('Errro en aplication');
    console.log(error)

} )