'use strict'

//BOM es el Browser Object Model

console.log(window.innerHeight);/* screenHeight tambien es válido *///Podemos ver el tamaño altura de la ventana de nuestro navegador web 
console.log(window.innerWidth);/* screenWidth tambien es válido *///Podemos ver el tamaño ancho de nuestro navegador web 

//Para sacar la url actual
console.log(window.location.href);

function redireccionamiento(url) {
    //window.location.href => este método nos permite crear una redirección a diferentes URLS
    window.location.href = url;
}

function abrirVentana(url) {
    //Abrir una ventana popup en el navegador
    window.open(url,"","width=400,heigth=300");
    
}