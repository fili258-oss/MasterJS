'use strict'

var categorias = ['Acción', 'terror', 'comedia'];
var peliculas = ['Bart simpson', 'Casa nueces', 'Acciones comprometidas', 'El elefente azul', 'Daniel el delfin'];

//El metodo sort nos permite ordena el array de forma alfabetica a - z
/* peliculas.sort(); */

//Para darle la vuelta al array podemos utilizar el método reverse
peliculas.reverse();
console.log(peliculas);
var cine = [categorias, peliculas];

/* console.log(cine[0][0]);
console.log(cine[1][0]); */

/* var elemento = ""; */

//do{
    //elemento = prompt("Escribe el nombre de la nueva palicula");
    //la funcion push nos ayuda a agregar un  elemento a nuestro array
    //peliculas.push(elemento);
//}while (elemento != "ACABAR");

//La función pop lo que hace es eliminar el último elemento de un array


//var indice = peliculas.indexOf('La María');
//if (indice > -1) {
    /* El metodo slplice nos permite en base un indice borrar tantos elementos quiera desde el indice */
    //peliculas.splice(indice, 1);
//} 

var peliculas_string = peliculas.join();
var cadena ="Marino, Carlos, Daniel, Papá G";
var cadena_array = cadena.split(", ");

console.log(cadena_array);