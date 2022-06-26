'use strict'
/* Tabla de multiplicar de un número introducido por pantalla */

var tabla = parseInt(prompt("Número para tabla", 1));

for (var i = 1; i <=10; i++) {
    document.write(i + " * " + tabla + " = " + tabla*i + "</br>")    
}