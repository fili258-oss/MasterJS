'use strict'
/* Muestre todos los numeros divisores de un numero introduce en promt */
var numero1 = parseInt(prompt("Digite el primer valor", 0));


for (let i = 1; i <= numero1; i++) {
    if (numero1%i == 0) {
        console.log('Dvisor: '+i);    
    }
    
    
}