console.log('arrays');


// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('El mes 5 es: ' + array[4] +' y el mes 11 es: ' + array[10]);



// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var arrayOrder;

arrayOrder = array.sort();
console.log(arrayOrder);



// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

var newArray;

newArray = array;

newArray.unshift('Inicio');
newArray.push('Final');

console.log(newArray);



// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).




