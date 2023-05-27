console.log('arrays');
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


console.log('<!-------A-------!>');
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('El mes 5 es: ' + array[4] +' y el mes 11 es: ' + array[10]);



console.log('<!-------B-------!>');
// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var arrayCopy;

//arraySorted = array;  Esto no copia el array!
arrayCopy = Array.from(array); //No modificar el array principal, siempre en la copia.

console.log(arrayCopy.sort());



console.log('<!-------C-------!>');
// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

var newArray;

newArray = Array.from(array);

newArray.unshift('Inicio');
newArray.push('Final');

console.log(newArray);



console.log('<!-------D-------!>');
// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

newArray.shift();
newArray.pop();
console.log(newArray);



console.log('<!-------E-------!>');
// e. Invertir el orden del array (utilizar reverse).

var arrayReverse;

arrayReverse = Array.from(array);

console.log(newArray.reverse());



console.log('<!-------F-------!>');
// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var arrayOrder;

arrayOrder = Array.from(array);

console.log(arrayOrder.join('-'));



console.log('<!-------G-------!>');
// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var copyArray;

copyArray = Array.from(array);

console.log(copyArray.slice(5,10));


