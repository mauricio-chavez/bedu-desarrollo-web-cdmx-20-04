// Tipos de dato

var nombreCompleto = 'Mauricio Chávez Olea';
var año = 2020;
var precio = 7.5;

// Primitivos

// Strings
var nombre = 'Mauricio';
var objeto = "Mauricio's phone";
var exclamacion = 'Einstein dijo: "Viva México"';

// Number
var cantidad = 3;
var precio = 17.5;

// Boolean
var aprendiendo = true;
var salirALaCalle = false;

// Compuestos

// Objetos
var experto = { nombre: 'Mauricio', lenguaje: 'Javascript', activo: true };
experto.nombre; // 1
experto['activo']; // 2

// Arreglo
var ingredientes = ['pepperoni', 'jamón', 'masa', 'tomate', 'queso'];
ingredientes[0];

// Funciones

var contarHasta5 = function () {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
};

function contarHasta6() {
  contarHasta5();
  console.log(6);
}

// Especiales

var algoNoDefinido = undefined;
var nulo = null;

// Operadores

var suma = 1 + 3;
var resta = 7 - 2;
var multiplicación = 5 * 5;
var division = 7 / 3;
var modulo = 7 % 3;

var contador = 0;
contador++;
contador--;

var concatenación = 'Mauricio ' + 'Chávez';
