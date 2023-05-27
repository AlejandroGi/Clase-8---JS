console.log('functions');

console.log('<!-------A-------!>');
// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.

function suma(nr1,nr2){
    return(nr1+nr2);
}

var result;

result = suma(1,2);
console.log('Resultado: ' + result);



console.log('<!-------B-------!>');
// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.

function sumaValid_B(nr1,nr2){

// Ver donde falla

    // (!Number(nr1) || !Number(nr2))? (!Number(Nr1)? 
    //     (console.log('El nr1 no es un valor numerico') ¿return? NaN)
    //     : 
    //       (console.log('El nr2 no es un valor numerico') ¿return? NaN))

    
    
    if (!Number(nr1) || !Number(nr2)) {
        console.log("Error! Alguno de los parametros no es un numero");
        return NaN;
    }
        return nr1 + nr2;
}

    result = sumaValid_B('a',2);
    console.log('Resultado: ' + result);



console.log('<!-------C-------!>');
// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.

function sumaValid_C(num){
    return Number.isInteger(num);
    
}

var num;

num=3.3;
sumaValid_C(num)? console.log('El numero: ' + num + ' es un numero entero'): console.log('El numero: ' + num + ' NO es un numero entero');



console.log('<!-------D-------!>');
// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).


function sumaValid_D(nr1,nr2){

    if (!Number(nr_1) || !Number(nr_2)) {
        console.log("Error! Alguno de los parametros no es un numero");
        return NaN;
    }else
    {
        if (!Number.isInteger(nr_1)){
            console.log('El numero: ' + nr_1 + ' NO es entero. Redondeando...');
            nr_1 = Math.round(nr_1);
        }
        if (!Number.isInteger(nr_2)){
            console.log('El numero: ' + nr_2 + ' NO es entero. Redondeando...');
            nr_2 = Math.round(nr_2);
        }
    }
    
    return nr_1 + nr_2;
}

var nr_1, nr_2;

nr_1=3.1;
nr_2=1;

ResultSum= sumaValid_D(nr_1, nr_2);
console.log('La suma es: ' + ResultSum);



console.log('<!-------E-------!>');
// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.


function sumaValid_E(nr1,nr2){

    if (!Number(nr_1) || !Number(nr_2)) {
        console.log("Error! Alguno de los parametros no es un numero");
        return NaN;
    }else
    {
       [nr_1, nr_2] = validate(nr_1, nr_2);
    }
    
    return nr_1 + nr_2;
}

function validate(nr_1, nr_2){
    
    if (!Number.isInteger(nr_1)){
        console.log('El numero: ' + nr_1 + ' NO es entero. Redondeando...');
        nr_1 = Math.round(nr_1);
    }
    if (!Number.isInteger(nr_2)){
        console.log('El numero: ' + nr_2 + ' NO es entero. Redondeando...');
        nr_2 = Math.round(nr_2);
    }

    return [nr_1, nr_2];
}

var nr_1, nr_2;

nr_1=3.1;
nr_2=2.1;

console.log('La suma es: ' + sumaValid_E(nr_1,nr_2));
