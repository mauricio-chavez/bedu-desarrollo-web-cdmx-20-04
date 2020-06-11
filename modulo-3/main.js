// 1

function saludar() {
  var nombre = 'Mauricio';
  console.log('Hola, ' + nombre);
}

function pares() {
  var limite = 10;
  for (var i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// 2: Argumentos y parámetros

// ARGUMENTO: nombre de la variable
// PARÁMETRO: valor de la variable

function saludar(nombre) {
  console.log('Hola, ' + nombre);
}

function pares(limiteInicial, limiteFinal) {
  for (var i = limiteInicial; i <= limiteFinal; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function suma(n1, n2) {
  return n1 + n2;
}

var resultado = suma(7, 10);

// Ejemplo 1:

function calculateAge(birthYear) {
  var age = 2020 - birthYear;
  return age;
}

function yearsUntilRetirement(year, name) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(name + ' retires in ' + retirement + ' years.');
}

// Reto 1:

function power(base, exponente) {
  var resultado = 1;
  for (var i = 0; i < exponente; i++) {
    resultado *= base;
  }
  console.log(resultado);
}

// 3

var dobles = function (limite) {
  for (var i = 2; i <= limite; i += 2) {
    console.log(i);
  }
};

var callback = function (numero) {
  return numero * numero;
};

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.map(callback);

// NOTE: Una función dentro de otra es llamada callback

// Función map

function map(array, func) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    array[i] = func(element);
  }
}

// Recursión
// 5! = 5 x 4!
// 4! = 4 x 3!
// 3! = 3 x 2!
// 2! = 2 x 1!
// 1! = 1

// fact(4) = 4 * 3 * 2 * 1
// fact(4) = 4 * fact(4 - 1)
// fact(3) = 3 * fact(3 - 1)
// fact(2) = 2 * fact(2 - 1)
// fact(1) = 1

var factorial = function fn(n) {
  if (n === 1) {
    // Caso base
    return 1;
  } else {
    // Caso recursivo
    return n * fn(n - 1);
  }
};

// Ejemplo 3:

(function () {
  var name = 'John Doe';
  console.log(name);
})();

(function (lastName) {
  var firstName = 'John';
  console.log(firstName + ' ' + lastName);
})('Doe');

// Alcance - Scope

var nombre = 'Mau'; // Global

function saludar() {
  var mensaje = 'Hola, mundo'; // Local
  console.log(mensaje);
}
