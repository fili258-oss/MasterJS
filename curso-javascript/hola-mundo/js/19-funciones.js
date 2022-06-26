/* function calculadora() {
    //conjunto de instrucciones a ejecutar
    console.log("Hola soy la calculadora");
    console.log("Pues si yo soy esa calculadora");

    return "Hola por su puesto quee si soy la calculadora";
}

//invocar o llamar a la función
calculadora();
var resultado = calculadora();
console.log(resultado);  */    

//parametros opcionales
function calculadora(numero1, numero2, mostrar = false) {
    //Conjunto de instrucciones a ejecutar

    if(mostrar == false){
        console.log("Resta:" + (numero1-numero2));
        console.log("Multiplicación:" + (numero1*numero2));
        console.log("División:" + (numero1/numero2));        
        console.log("*****************");
    }else{
        document.write("Resta:" + (numero1-numero2)+"<br/>");
        document.write("Multiplicación:" + (numero1*numero2)+"<br/>");
        document.write("División:" + (numero1/numero2)+"<br/>");        
        document.write("*****************");
    }
}

//Invocar o llamar a la acción
calculadora(1, 4);
calculadora(1, 5, true);