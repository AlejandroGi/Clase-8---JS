console.log('If Else');

console.log('<!-------A-------!>');
// a.  Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var numberRandom;

numberRandom = Math.random();

(numberRandom>=0,5) ? console.log('Number: ' + numberRandom + ' Greater than 0,5'): console.log('Number: ' + numberRandom + ' Lower than 0,5');



console.log('<!-------B-------!>');
// b.  Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//      i. “Bebe” si la edad es menor a 2 años;
//      ii. “Niño” si la edad es entre 2 y 12 años;
//      iii. “Adolescente” entre 13 y 19 años;
//      iv. “Joven” entre 20 y 30 años;
//      v. “Adulto” entre 31 y 60 años;
//      vi. “Adulto mayor” entre 61 y 75 años;
//      vii. “Anciano” si es mayor a 75 años.

var age;

age = Math.trunc((Math.random() * 100));

if (age < 2){ console.log('Edad: ' + age + ' Bebe' )};
if (age >=2 && age <=12){ console.log('Edad: ' + age + ' Niño' )};
if (age >=13 && age <=19){ console.log('Edad: ' + age + ' Adolescente' )};
if (age >=20 && age <=30){ console.log('Edad: ' + age + ' Joven' )};
if (age >=31 && age <=60){ console.log('Edad: ' + age + ' Adulto' )};
if (age >=61 && age <=75){ console.log('Edad: ' + age + ' Adulto mayor' )};
if (age >75){ console.log('Edad: ' + age + ' Anciano' )};

