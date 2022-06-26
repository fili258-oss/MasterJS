'Use strict'
/*Mostrar los números impares de 2 numeros ingresados por el usuario  */

var numero1 = parseInt(prompt("Digite el primer valor", 0));
var numero2 = parseInt(prompt("Digite el número dos", 10));
var division = 0;

for (var i = numero1; i <= numero2; i++) {
    
    if(i%2 != 0 ){
        console.log("El número "+ i+ " Es impar");
    }
    
    
}