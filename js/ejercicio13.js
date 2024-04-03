/*
13- Realiza un script que pida un texto y lo muestre en mayúsculas.
*/

let texto = prompt("Ingrese un texto:");

if (texto !== null) {
    let textoMayusculas = texto.toUpperCase();

    alert("Texto en mayúsculas:\n" + textoMayusculas);
} else {
    alert("No se ingresó ningún texto.");
}