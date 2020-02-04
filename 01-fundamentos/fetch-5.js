
fetch ('http://mx1server.com/bebox/supervisor/est9.php')
.then(resp =>{

resp.json().then(console.log );


})
.catch( error =>{
    console.log('Error en la peticion')
    console.log(error);
    
})
