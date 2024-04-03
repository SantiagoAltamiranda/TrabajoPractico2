/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/

let numeroAleatorio;

do {
    numeroAleatorio = Math.floor(Math.random() * 99) + 1;
} while (numeroAleatorio < 1 || numeroAleatorio > 99);

alert("El número aleatorio generado es: " + numeroAleatorio);