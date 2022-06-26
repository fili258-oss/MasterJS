'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;

var Operaciones = numero1 + numero2;
alert("El resultado de la operación es = "+Operaciones);


//Tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_o_falso = true;
var verdadero_o_falso = false;

//Algunas Funciones
//- Number(numero_falso) => esta funcion convierte un texto en numero
//parseInt()
//parseFloat
//String() => para convertir a texto

var numero_falso = "33";
console.log(Number(numero_falso)+7);
console.log(cadena_texto);

//El metodo typeof nos devuelve el tipo de dato de una variable

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero1);
console.log(typeof numero2);