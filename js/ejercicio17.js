/*
17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
Ejemplo:
Input: Hola mundo Output: la vocal ‘o’ está en la posición
1
*/ 

let texto = prompt("Por favor, ingrese un texto:");

texto = texto.toLowerCase();

let posicion = -1;

const vocales = "aeiou";

for(let i = 0; i < texto.length; i++){
    let caracter = texto.charAt(i);

    if(vocales.includes(caracter)) {
        posicion = i;
        break;
    }
}

if (posicion !== -1) {
    alert("La primera vocal '" + texto[posicion] + "' está en la posición " +(posicion + 1));
} else {
    alert("No se encontró ninguna vocal en el texto.");
}