'use sctrict'

//Utilizando un bucle, mostrar la suma y la media de los numeros introducidos por el usuario, 
//hasta introducir un numero negativo y ahi mostramos el resultado


var media = 0;
var suma = 0;
var resultado = 0;
var contador = 0;
var numeros = parseInt(prompt("Introdusca  un valor"));

while (numeros >= 0) {    
    resultado += numeros;
    numeros = parseInt(prompt("Introdusca  otro valor"));    
    contador++;

}

media = parseFloat(resultado / contador);
if (media > 0 && resultado > 0) {
    /* alert('hey la suma de los numeros es: '+resultado); */
    alert('hey la suma de los numeros es: '+resultado);
    alert('hey la media de los numeros es: '+media);    
}