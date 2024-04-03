/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.

*/

const edad = Number(prompt("Ingresa tu edad"));

if (isNaN(edad)) {
  alert("No es un numero valido");
} else if (edad < 0) {
  alert("No es un numero valido");
} else if (edad >= 18) {
  alert("Ya puede conducir");
} else {
  alert("No puede conducir");
}
