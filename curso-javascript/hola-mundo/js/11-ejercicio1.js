'use strict'

/* Programa que pida 2 numeros y que nos diga cual es mayor, el menor y si son iguales*/

var numero1 = parseInt(prompt("Escribe el número 1", 18));
var numero2 = parseInt(prompt("Escribe el número 2", 18));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ) {
    numero1 = parseInt(prompt("Escribe el número 1", 18));
    numero2 = parseInt(prompt("Escribe el número 2", 18));          
}



    if (numero1 == numero2) {
        alert("Hey los números son iguales. siendo "+numero1+" igual que "+numero2);
    }else if(numero1 > numero2){
        alert('El número mayor es: '+numero1);
        alert('El número menor es: '+numero2);
    }else if(numero2 > numero1){
        alert('El número mayor es: '+numero2);
        alert('El número menor es: '+numero1);
    }



/* if (numero1 > numero2) {

    alert("El numero uno es mayor. siendo "+numero1+" mayor que "+numero2);
}else{
    alert("El numero dos es menor. siendo "+numero2+" menor que "+numero1);
} */
/*  if (numero1 < numero2) {

    alert("El numero uno es menor. siendo "+numero1+" menor que "+numero2);

}else if(numero1 > numero2){

    alert("El numero uno es mayor. siendo "+numero1+" mayor que "+numero2);
    
}else if(numero2 > numero1){

    alert("El numero dos es mayor. siendo "+numero2+" mayor que "+numero1);

}else if(numero2 < numero1){

    alert("El numero dos es menor. siendo "+numero2+" menor que "+numero1);
}else{
    alert("Hey los números son iguales. siendo "+numero1+" igual que "+numero2);
} */
 