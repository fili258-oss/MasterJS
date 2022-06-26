'use strici'

//Switch

var edad = 75;
var imprime ="";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de la edad";
        break;
    case 25:
        imprime = "Ya eres adulto";
        break;   
    case 40:
            imprime = "Crisis de los cuarenta";
        break;
    case 75:
        imprime = "ya eres un anciano";
    break;
    default:
        impri = "Tu edad es otra";
        break;
}
console.log(imprime);