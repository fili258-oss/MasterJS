'use strict'
//Funciones anonimas

/*Defición::: es una función que no tiene nombre. es decir ese conjunto de instrucciones no va a 
tener ningun nombre, y lo puedo utilizar dentro de una variable

callbacks un callback es una función anonima que no tiene ningún nombre, que se ejecuta dentro de otra
*/

var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}

//Callback

function sumame(numero1, numero2) {
    var sumar = numero1 + numero2;
    return sumar;
}
 
/* console.log(
    sumame(8, 9)
    ); */

// Funcion anonima    
function sumando(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//llamamos a la function sumando para especificar en sus parametros la funcion anonima de callbakc
sumando(8, 7, function(dato){
    console.log("La suma es: ", dato)
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
}
)

//Funciones flecha, es sostituir la palabla reservada function por => y también podríamos quitar sus () 
//Se especifica:: parametro, flecha

// Funcion anonima    
function sumando(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//llamamos a la function sumando para especificar en sus parametros la funcion anonima de callbakc
sumando(8, 7, dato =>{
    console.log("La suma es: ", dato)
},
dato =>{
    console.log("La suma por dos es: ", (dato*2));
}
)
