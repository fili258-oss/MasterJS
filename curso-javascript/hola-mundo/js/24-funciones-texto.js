'use strict'

//Transformación de textos

var numero = 444;
var texto1 ="Bienvenido al curso de js de don Victor curso";
var texto2 = "Es un buen curso";
var texto3 = "HOLA A TODOS VAMOS A CONVERTIRNOS EN MINUSCULAS :)";

//Transformar el número a string
var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto3.toLowerCase();
console.log(dato);


//Calcular la longitud que tiene un texto
var nombre = ",";
console.log(nombre.length);

//Metodo indexOf o search para busquedas de la primer conicidencia de palabras dentro de un string
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//Metodos para busquedas de la última conicidencia de palabras dentro de un string
var busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

//Metodo match para busquedas de varias conicidencias que serán devueltas en un objeto de palabras dentro de un string
var busqueda = texto1.match("curso");
console.log(busqueda);

//Metodo substr para busquedas de cadenas a partir de un numero que le indiquemos de la posición del caracter y como segundo parametro será la cantidad de caracteres que deseamos sacar
var busqueda = texto1.substr(14, 5);
console.log(busqueda);

//Metodo charAt para sacar  una la letra en especifico 
var busqueda = texto1.charAt(44);
console.log(busqueda);

//Metodo startsWith/ endsWith nos develve true o false, todo depende si encuentra la letra al inicio de la cadena o strind
var busqueda = texto1.startsWith("Bienvenido al curso");
console.log(busqueda);

//Metodo includes: este método busca dentro de un string y nos devuelbe sea true o false dependiendo de si encuentra la palabra
var busqueda = texto1.includes("js");
console.log(busqueda);

//Metodo replace: este método debe recibir 2 parametros= texto a cambiar en el string y el nuevo texto para insertar
var busqueda = texto1.replace("js", "JavaScript");
console.log(busqueda);

//Metodo slice: este método debe recibir 1 parametro = el numero de la posición desde donde queremos cortar un string asta el final
var busqueda = texto1.slice(14);
console.log(busqueda);

//Metodo split: este método puede recibir como parametro un espacio ""  para guardar dentro de un solo array el string, si usamos el espacio ""  se crearán barios objetos dentro del array, las palabras se separaran en objetos 
var busqueda = texto1.split(" ");
console.log(busqueda);

//Metodo trim: este método lo que hace es recortar los espacios que tenga un string por delante o por detras
var busqueda = texto1.trim(" ");
console.log(busqueda);