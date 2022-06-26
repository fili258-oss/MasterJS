"use strict";
window.addEventListener("load", function () {
     
    var boton = document.querySelector("#boton");
    
    boton.style.background = "green";
    boton.style.color = "white";

    //Timers
    var tiempoA = setInterval(function () { //setInterval nos ayuda a definir un timpo determinado para realizar o ejecutar un trozo de código las veces que queramos
        if (boton.style.background == "green") {
            boton.style.background = "red"
            boton.style.color = "white"
        }else{
            boton.style.background = "green"
            boton.style.color = "white"
        }
        
        
    }, 1000);

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', function(){
        //Debemos pasarle la variable del setInterval en este caso tiempoA para que detenga el intervalo del bucle
        console.log("deteniendo")
        clearInterval(tiempoA);                
    });

    //También podemos utilizar el método setTimeOut, que se ejecuta solo una vez de acuerdo al intervalo de tiempo que le definamos
    /* ar tiempoB = setTimeout(function () { 
        if (boton.style.background == "green") {
            boton.style.background = "red"
            boton.style.color = "white"
        }else{
            boton.style.background = "green"
            boton.style.color = "white"
        }
        
        console.log("ejecutando timer");
    }, 500); */
    
    
    
});


