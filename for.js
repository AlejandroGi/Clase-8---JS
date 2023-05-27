console.log('For');

console.log('<!-------A-------!>');
// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

var array = ['perro', 'gato', 'pez', 'mono', 'leon'], x;

for (x=0; x< array.length; x++){
    //alert(array[x]);   
    console.log(array[x]);
}



console.log('<!-------B-------!>');
// b. al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

var arrayLetter, wordIni, wordRest, word;

arrayLetter = Array.from(array);

for (x=0; x< arrayLetter.length; x++){

    wordIni = arrayLetter[x].substring(0,1).toUpperCase();
    wordRest = arrayLetter[x].substring(1);
    
    word = wordIni + wordRest;

    console.log(word);
}



console.log('<!-------C-------!>');
// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
// con un bucle for para ir guardando cada palabra dentro dela variable sentence. 
// Al final mostrar una única alerta con la cadena completa.

var sentence;

sentence=[''];


for (x=0, y=1; x< arrayLetter.length; x++){

    sentence.push(arrayLetter[x]);
}
//alert(sentence);
console.log(sentence);



console.log('<!-------D-------!>');
// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
// el número de la repetición, es decir que al final de la ejecución del bucle for
// debería haber 10 elementos dentro del array, desde el número 0 hasta al número
// 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var arrayVoid;

arrayVoid=[];

for (x=0; x< 10; x++){
    arrayVoid.push(x);
}
console.log(arrayVoid);
