import cipher from './cipher.js';


let clave = document.getElementById("desplazamiento");
let traduccion = document.getElementById("texto2");

//funcion  que captura los datos y trasforma el textarea en mayusculas
let mensaje = document.getElementById("texto1");
mensaje.addEventListener("keyup", function(){
this.value = this.value.toUpperCase();
}, true
);

   
//boton codificar //=encode(desplazamiento, mensaje)
const boton1= document.getElementById("botonCodificar");
boton1.addEventListener("click", function(){
   
   let textopuro = mensaje.value;
   let offset = parseInt(clave.value);
   

let resultado = cipher.encode(offset, textopuro);

console.log(resultado)

traduccion.innerHTML = resultado

  
})

// boton decodificar //=decode( desplazamiento, mensaje)
 const boton2 = document.getElementById("botonDecodificar");
 boton2.addEventListener("click", function(){
   let textopuro = mensaje.value;
   let offset = parseInt(clave.value);

  let resultado2 = cipher.decode( offset, textopuro);

console.log(resultado2)
   traduccion.innerHTML = resultado2 
   
 })



console.log(cipher);


let refresh = document.getElementById("boton3");
refresh.addEventListener('click', function() {
            location.reload();
})


