/*
2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/

let nota = prompt("Ingrese la nota (de 0 a 10):");
let mensaje;

if(!isNaN(nota)) {
    nota = parseInt(nota);

    if (nota >= 0 && nota <= 10) {
        if (nota >= 0 && nota <= 2){
            mensaje = "Muy deficiente";
        } else if (nota >= 3 && nota <= 4) {
            mensaje = "Insuficiente";
        } else if (nota >= 5 && nota <= 6) {
            mensaje = "Suficiente";
        } else if (nota === 7) {
            mensaje = "Bien";
        } else if (nota >= 8 && nota <= 9) {
            mensaje = "Notable";
        } else {
            mensaje = "Sobresaliente";
        }
    } else {
        mensaje = "Número erróneo";
    }
} else {
    mensaje = "Introduce un número válido";
}

alert(mensaje);