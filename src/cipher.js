const cipher = {
  
  encode: function (desplazamiento, mensaje){
    let textoAscii=[];
      let codeTextoAscii=[];
      let codeTexto=[];

//excepciones para el manejo de errores
    if ( desplazamiento === undefined || mensaje === undefined){
   throw new TypeError("ingrese su mensaje o numero de desplazamiento")
 } else if (desplazamiento === 0 || mensaje === typeof 0){
  throw new TypeError ("valor incorrecto no puede ser 0")
 }else if (desplazamiento === null || mensaje === [])
 throw new TypeError ("vacio")
else{
      
      for(let i=0; i<mensaje.length; i++)//ciclo for,inicializa con variable i=o/condición comprueba si i es menor al largo del mensaje /incrementara en 1 después de cada pase del bucle
      {let mensajeAscci= mensaje.charCodeAt(i); //obtener codigo ascci de las letras que se nos brindan, en este caso del mensaje escrito/ Array textoAscii []
        textoAscii.push(mensajeAscci); //con push añado valores a  mi array textoAscii /mensaje en texto ascii
        
        if(textoAscii[i]===32){
          let uno = 32;
          codeTextoAscii.push(uno); //con push añado valores al final de mi array codetextoascii
        } else {
          let uno = ((textoAscii[i]-65 + desplazamiento) %26) + 65; //convertir codigo ascii (numeros) a la posición del alfabeto que nosotros entendemos/aplicar formula y luego con esa nueva posicion q esta en el alfabeto q nosotros conocemos pasarlo a ascii
          codeTextoAscii.push(uno); //nueva posicion del alfabeto que nosotros entendemos (en numero)

        }
        let codigoAsciiEnLetra = String.fromCharCode(codeTextoAscii[i]); //convertir (numero) codigo ascci a una letra/pasar otra vez a codigo ascci para que la computadora nos muestre esa letra
        codeTexto.push(codigoAsciiEnLetra);//con push añado a mi array codetexto el resultado o valor de mi variable y
      }
    }
    console.log(codeTexto)
    
    return codeTexto.join('');
    },

    decode: function (desplazamiento, mensaje){
      let textoAscii=[];
        let decodeTextoAscii=[];
        let decodeTexto=[];

  //excepciones para el manejo de errores
      if (desplazamiento === undefined || mensaje === undefined){
     throw new TypeError("ingrese su mensaje o numero de desplazamiento")
   } else if (desplazamiento === 0 || mensaje === typeof 0){
    throw new TypeError ("valor incorrecto no puede ser 0")
   }else if (desplazamiento === null || mensaje === [])
   throw new TypeError ("vacio")
  else{
        
        for(let i=0; i<mensaje.length; i++)
        {let mensajeAscii= mensaje.charCodeAt(i);
          textoAscii.push(mensajeAscii);
          
          if(textoAscii[i]===32){
            let uno = 32;
            decodeTextoAscii.push(uno);
          } else {
            let uno = ((textoAscii[i]+65 - desplazamiento) %26) + 65;
            decodeTextoAscii.push(uno);
  
          }
          let codigoAsciiEnLetra = String.fromCharCode(decodeTextoAscii[i]);
          decodeTexto.push(codigoAsciiEnLetra);
        }
      }
      console.log(decodeTexto)
      
      return decodeTexto.join('');
      },

};


  export default cipher;