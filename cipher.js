const cipher = {
  
  encode: function (desplazamiento, mensaje){
    let textoascii=[];
      let codetextoascii=[];
      let codetexto=[];

//excepciones para el manejo de errores
    if ( desplazamiento === undefined || mensaje === undefined){
   throw new TypeError("ingrese su mensaje o numero de desplazamiento")
 } else if (desplazamiento === 0 || mensaje === typeof 0){
  throw new TypeError ("valor incorrecto no puede ser 0")
 }else if (desplazamiento === null || mensaje === [])
 throw new TypeError ("vacio")
else{
      
      for(let i=0; i<mensaje.length; i++)//ciclo for, inizializa con variable i=o y si i es menor al largo del mensaje incrementara en 1
      {let x= mensaje.charCodeAt(i); //sacando código AsCII
        textoascii.push(x); //guardando en variable textoascii mi resultado de variable x
        
        if(textoascii[i]===32){
          let uno = 32;
          codetextoascii.push(uno);
        } else {
          let uno = ((textoascii[i]-65 + desplazamiento) %26) + 65; //aplicando formula x-65+n(desplazamiento) residuo de %26+65
          codetextoascii.push(uno);

        }
        let y = String.fromCharCode(codetextoascii[i]);
        codetexto.push(y);
      }
    }
    console.log(codetexto)
    
    return codetexto.join('');
    },

    decode: function (desplazamiento, mensaje){
      let textoascii=[];
        let decodetextoascii=[];
        let decodetexto=[];

  //excepciones para el manejo de errores
      if (desplazamiento === undefined || mensaje === undefined){
     throw new TypeError("ingrese su mensaje o numero de desplazamiento")
   } else if (desplazamiento === 0 || mensaje === typeof 0){
    throw new TypeError ("valor incorrecto no puede ser 0")
   }else if (desplazamiento === null || mensaje === [])
   throw new TypeError ("vacio")
  else{
        
        for(let i=0; i<mensaje.length; i++)
        {let x= mensaje.charCodeAt(i);
          textoascii.push(x);
          
          if(textoascii[i]===32){
            let uno = 32;
            decodetextoascii.push(uno);
          } else {
            let uno = ((textoascii[i]+65 - desplazamiento) %26) + 65;
            decodetextoascii.push(uno);
  
          }
          let y = String.fromCharCode(decodetextoascii[i]);
          decodetexto.push(y);
        }
      }
      console.log(decodetexto)
      
      return decodetexto.join('');
      },

};


  export default cipher;