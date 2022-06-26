'use strict'

//Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario

var numero1 = parseInt(prompt("Digite el primer valor", 0));
var numero2 = parseInt(prompt("Digite el número dos", 10));

while (numero1 <= numero2) {
    numero1++
    console.log(numero1);
    
}
