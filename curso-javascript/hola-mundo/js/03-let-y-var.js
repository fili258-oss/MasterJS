'use strict'
// Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero);//numero 40

if(true){
    var numero = 50;
    console.log(numero);//numero = 50
}

console.log(numero);//numero = 50

//Prueba con let
var texto = "Curso de JS victorroblesweb.es";
console.log(texto);

if(true){
    let texto = "Curso Laravel 5 victorrobles.es"
    console.log(texto);
}

console.log(texto);
