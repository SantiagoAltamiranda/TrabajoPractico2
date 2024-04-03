/* 
3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
*/

let = chistes = '';

do {
  let texto = prompt("Ingresa tu mejor chiste");

  if (texto == null) {
    //terminar programa
    break;
  }

  chistes += '-' + texto + '-';  
  alert(`Tu chiste fue ${texto}`);
} while (true);

alert(`Tus chistes fueron ${chistes}`);