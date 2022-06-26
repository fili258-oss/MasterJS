'use strict'

//calculadora:
//Pida dos numeros por pantalla
//Si metemos mal uno que nos los buelva a pedir
//en el cuerpo de una página, en un alerta, en consala mostrar el resultado de
//sumar, restar, multiplicar y dividir esas dos cifras

var numeroB = parseInt(prompt("Número uno", 1));
var numeroA = parseInt(prompt("Número dos", 1));

while (numeroA <= 0 || numeroB <= 0 || isNaN(numeroB) || isNaN(numeroA)) {
 numeroB = parseInt(prompt("Número uno", 1));
 numeroA = parseInt(prompt("Número dos", 1));
}

var resultado = "la suma de "+numeroA+" + "+numeroB+ " = "+ (numeroA + numeroB)+ "\n"+
                "la resta de "+numeroA+" - "+numeroB+ " = "+ (numeroA - numeroB)+ "\n"+
                "la multiplicación de "+numeroA+" x "+numeroB+ " = "+ (numeroA * numeroB)+ "\n"+
                "la división de "+numeroA+" / "+numeroB+ " = "+ (numeroA / numeroB);

alert(resultado);
