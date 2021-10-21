// https://www.w3schools.com/js/js_number_methods.asp

const num1 = 5;
const num2 = 8;
const pi = 3.141516;
const str = "145";

console.log(`suma: 5+ 8`);
//dentro del ${} no va a hacer la operacion!
console.log(`suma: ${5 + 8}`);
console.log(`suma: ${num1 + num2}`);
console.log(`resta: ${num1 - num2}`);
console.log(`multiplicacion: ${num1 * num2}`);
console.log(`division: ${num1 / num2}`);
console.log(`potencia: ${num1 ** num2}`);

//resto: es lo que queda restante en UNA DIVISION.

console.log(`resto: 8 / 5: lo que nos sobra: ${num2 % num1}`);

//decidir la cantidad de decimales que queremos:

console.log(`toFixed: ${pi.toFixed(2)}`); //2 suele ser lo que mas se usa porque son los centavps. Se puede poer tantos como necesitemos
//a veces cuando fijamos a muchos ma de los decimales que trae... hace cosas raras:
console.log(`toFixed: ${pi.toFixed(30)}`);


//para redondear: floor es piso, ceil es techo. Uno va para abajo, otro va para arriba. usamos math, y el parametro es el unmero que quiero
console.log(`toFloor: ${Math.floor(pi)}`);
console.log(`toCeil: ${Math.ceil(pi)}`);

//sacar una raiz cuadrada con Math (square root):
console.log(`sacando raiz: ${Math.sqrt(36)}`);

//sacar numero random entre 0 y 1 , y hacer que solo sea de 2 decimales de largo:
console.log(`numero random: ${Math.random().toFixed(2)}`);

//sacar del 1 a 10

let random= Math.random().toFixed(1)
console.log(parseFloat(random)*10);

//cambiar el type:
//con numero:dos formas principales:

console.log('to number:', Number(str));
console.log('to number:', parseInt(str));
console.log('to number:', typeof Number(str), Number(str));
console.log(typeof str);

//numero a string:
console.log('to string:', num1.toString());