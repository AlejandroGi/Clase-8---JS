// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase)

var string;

string = 'alejandria';
console.log(string.toUpperCase());



// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring)

var string, stringchitiquito;

string = 'alejandria';

stringchitiquito = string.substring(0,5);
console.log(stringchitiquito);



// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring)

var string, stringchitiquito, posFinal, posCasiFinal;

string = 'alejandria';

posFinal= string.length;
posCasiFinal= posFinal-3;

stringchitiquito = string.substring(posCasiFinal,posFinal);
console.log(stringchitiquito);


// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +)

var string, stringMayu, posFinal, posCasiFinal;

string = 'alejandria';
stringMayuIni= string.substring(0,1).toUpperCase()+string.substring(1); /*<-- lo da vuelta */

console.log(stringMayuIni);


// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).