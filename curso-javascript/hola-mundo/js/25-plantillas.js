'use strict'

var nombre = prompt("Ingresa tu nombre", "ana");
var apellidos = prompt("Ingresa tus apellidos", "alvarez");

/* var texto = "Mi nombre es: " +nombre+" Mis apellidos son: "+apellidos; */

var texto = `
    <h1>Hola bienvenido</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h4>Mis apellidos son: ${apellidos}</h4>
`;

document.write(texto);
