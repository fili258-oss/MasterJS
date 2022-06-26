'use strict'

/* Escribir un programa que lea diez números que ingresa el usuario, 
y calcule (y muestre) el promedio de estos números. */


var media = 0;
var suma = 0;
var resultado = 0;
var contador = 0;
var numeros = 0;

 

    while (contador < 10 && !isNaN(numeros)) {    
        contador++;
        numeros = parseFloat(prompt("Introdusca  el número " + contador));    
        resultado += numeros;
        
        
    
    }
    
    media = parseFloat(resultado / contador);
    if (media > 0 && resultado > 0) {
        /* alert('hey la suma de los numeros es: '+resultado); */
        alert('hey la suma de los numeros es: '+resultado);
        alert('hey la media de los numeros es: '+media);    
    }
    
    if (isNaN(numeros)) {
        alert('Por favor introduce un número'); 
    }
