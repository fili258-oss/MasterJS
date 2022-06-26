'use strict'

function porConsola(numero1, numero2) {
    console.log("Resta:" + (numero1-numero2));
    console.log("Multiplicación:" + (numero1*numero2));
    console.log("División:" + (numero1/numero2));        
    console.log("*****************");
}

function porPantalla(numero1, numero2) {
    document.write("Resta:" + (numero1-numero2)+"<br/>");
    document.write("Multiplicación:" + (numero1*numero2)+"<br/>");
    document.write("División:" + (numero1/numero2)+"<br/>");        
    document.write("*****************");
}

//parametros opcionales
function calculadora(numero1, numero2, mostrar = false) {
    //Conjunto de instrucciones a ejecutar

    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }

    return true;
}

//Invocar o llamar a la acción
calculadora(1, 4);
calculadora(1, 5, true);
calculadora(10, 1, true);
calculadora(41, 7);
calculadora(78, 9);
calculadora(91, 8);
calculadora(91, 5, true);