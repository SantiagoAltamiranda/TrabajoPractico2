/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.

*/

let total = 0;
let numero;

do {
    numero = prompt ("Introduce un número");
    if (numero === null) {
        break;
    }
    let number = parseInt(numero);
    if (!isNaN(number)) {
        total += number;
    } else {
        alert ("No es un número válido. Por favor, introduce un número.");
    }
} while (true);

if (total !== 0) {
    alert("La suma total de los números introducidos es: " + total);
} else {
    alert("No se introdujeron números.");
}