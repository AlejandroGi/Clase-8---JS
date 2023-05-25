console.log('strings');


// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase)

var string;

string = 'alejandria';
console.log(string.toUpperCase());



// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring)

var string, stringLittle;

string = 'alejandria';

stringLittle = string.substring(0,5);
console.log(stringLittle);



// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring)

var string, stringLittle, posEnd, posAlmostEnd;

string = 'alejandria';

posEnd= string.length;
posAlmostEnd= posEnd-3;

stringLittle = string.substring(posAlmostEnd,posEnd);
console.log(stringLittle);



// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +)

var string, stringMayu, posEnd, posAlmostEnd;

string = 'alejandria';

stringMayuIni= string.substring(0,1).toUpperCase()+string.substring(1); /*<-- lo da vuelta */
console.log(stringMayuIni);



// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).

var string, position;

string = 'alej andr ia';

position=string.indexOf(' ');
console.log('Se encuentra en la posicion ' + position + ' del arreglo');



// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
//    toUpperCase, toLowerCase y el operador +).

var string,position, string1, string1_Ini, string1_Rest, caractString1, string1New, string2, string2_Ini, string2_Rest, string2New, caractString2;

string='neumococo parasite';

position=string.indexOf(' ');

string1 = string.substring(0,position);
caractString1 = string1.length;
string1_Ini = string1.substring(0,1).toUpperCase();
string1_Rest = string.substring(caractString1, 1);

string1New= string1_Ini +string1_Rest;


string2= string.substring(position+1);
caractString2 = string2.length;
string2_Ini= string2.substring(0,1).toUpperCase();
string2_Rest=string2.substring(caractString2,1)

string2New= string2_Ini + string2_Rest;

stringNew= string1New + ' ' +string2New;
console.log(stringNew);
