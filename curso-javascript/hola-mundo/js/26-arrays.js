'use strict'

var nombre = "Victor Robles";
var nombres  = ["Marino", "Edwar", "Yeferson", "Ana"]

var lenguajes = new Array("PHP", "Js", "Go", "Java", "C#", "C", "Pascal");

/* var elemento = parseInt(prompt("Qué elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que "+ nombres.length);    
}else{
    alert("El usuario seleccionado es: "+ nombres[elemento])
} */

document.write("<h1>Lenguajes de programación del 2021</h1>")
document.write("<ul>");

/* for (let i = 0; i <= lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>")
    
}
 */
lenguajes.forEach((elemento, indice)=>{
    /* console.log(arr); */
    document.write("<li>"+indice+ " - "+elemento+"</li>")
})

document.write("<hr>");
for (let lenguaje in lenguajes) {
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
    
}
document.write("</ul>")

//Busquedas
var precios = [10, 20, 0, 50, 12, ];
//Función de callback
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

//El metodo some nos ayuda a validar especificamente si una condición se cumple o no
var busqueda = precios.some(precio => precio >= 4);

console.log(busqueda);