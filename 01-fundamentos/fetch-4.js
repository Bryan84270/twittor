
let img= document.querySelector('img')

fetch( 'logo.png' )
.then(resp => resp.blob())
.then ( imagen =>{

    //console.log(imagen)
    var imgPath = URL.createObjectURL(imagen)
    img.src=imgPath;

})