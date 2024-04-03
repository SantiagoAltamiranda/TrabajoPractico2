/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

const limite = 500;
const multiplo4 = " (Múltiplo de 4) ";
const multiplo9 = " (Múltiplo de 9) ";
const lineaHorizontal = "—————————————————————<br />"; 

for (let i = 1; i <= limite; i++) {
    let contenido = i;

    if (i % 4 === 0 && i % 9 === 0) {
        contenido += multiplo4 + " y " + multiplo9;
    } else if (i % 4 === 0) {
        contenido += multiplo4;
    } else if (i % 9 === 0) {
        contenido += multiplo9;
    }

    document.write(contenido + "<br />");

    if (i % 5 === 0 && i < limite) {
        document.write(lineaHorizontal);
    }
}