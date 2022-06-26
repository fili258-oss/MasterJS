/* Document Object Model */

'use strict'
function cambia_color(color_fondo, color_letra) {        
    caja.style.color = color_letra;
    caja.style.background = color_fondo;
}
function reset_color(color_fondo, color_letra) {        
    caja.style.color = color_letra;
    caja.style.background = color_fondo;
}


//Conseguir elementos con un ID completo

/* var caja = document.getElementById("micaja"); */ /* Esta es una forma de seleccionar los elementos del DOM */
var caja = document.querySelector("#micaja");/*.micaja=> para las clases #mi caja=> para los de id, h4(sin nada para las etiquetas html), Esta es otra forma de seleccionar los elementos del DOM de una forma similar a la de jQuery */

/* caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"; */
/* Jugar con los estilos de los elementos dom */
    /* caja.style.background = "red";
    caja.style.padding = "20px";
    caja.style.color = "white"; */
/* caja.className = "Clase_one"; */

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var valor;
for(valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == 'string') {

        var parrafo = document.createElement("p");//Creamos el elemento p en el html
        var texto = document.createTextNode(todosLosDivs[valor].textContent);//Obtenemos el valor de cada iteración del bucle
        parrafo.append(texto);//Metemos el texto dentro del parrafo el metodo append ó prepend nos sirve para pasar valores a las etiquetas
        document.querySelector("#miseccion").appendChild(parrafo);
        //append significa añade despues y preppend significa añade antes
    }
    
}


var contenido_texto =  todosLosDivs[0];/* .innerHTML; *///con el atributo textContent accedemos al texto del div, tambien podemos hacerlo con innerHTML

contenido_texto.innerHTML = "Texto desde js";
contenido_texto.style.background = "red";
contenido_texto.style.color = "white";
/* console.log(contenido_texto); */


//Conseguir elementos por su clase css
/* console.log(caja); */