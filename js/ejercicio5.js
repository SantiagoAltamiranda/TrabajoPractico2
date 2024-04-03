/* 
5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).

*/

let numero;
let letraDNI;
let salir = false;

while (!salir) {
    numero = prompt("Introduce tu número de DNI:");

    if (numero === null) {
        salir = true;
    } else{

        let num = parseInt(numero);
        if (isNaN(num) || num < 0 || num > 99999999) {
            alert("El número de DNI debe ser un número entre 0 y 99999999.");
        } else {

            const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
            const resto = num % 23;
            letraDNI = letrasDNI.charAt(resto);
            alert("La letra de tu DNI es: " + letraDNI);
        }
    }
}