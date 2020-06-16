// Arreglos

var nombres = ['Mauricio', 'Ricardo', 'Javier'];

nombres[1] = 'Juan Carlos';

console.log(nombres.length);

// Ejercicio 1

function multiplyByTwoFrom(numbers) {
  var multipliedArray = Array.from(numbers);
  for (var i = 0; i < numbers.length; i++) {
    multipliedArray[i] = multipliedArray[i] * 2;
  }
  return multipliedArray;
}

function multiplyByTwoPush(numbers) {
  var multipliedArray = [];
  for (var i = 0; i < numbers.length; i++) {
    multipliedArray.push(numbers[i] * 2);
  }
  return multipliedArray;
}

// Benchmark

var arreglo = [];

for (var i = 1; i < 100000; i++) {
  arreglo.push(i);
}

console.time('Multiply with from');
multiplyByTwoFrom(arreglo);
console.timeEnd('Multiply with from');

console.time('Multiply with push');
multiplyByTwoPush(arreglo);
console.timeEnd('Multiply with push');

Reto 1

function calculateAverage(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Same as: sum = sum + numbers[i];
  }

  return sum / numbers.length
}

// Objetos

var pelicula = {
  nombre: 'Django',
  director: 'Quentin Tarantino',
  'mi llave': 'Hola',
};

var nombres = {
  0: 'Mauricio',
  1: 'Ricardo',
  2: 'Javier',
};

pelicula.nombre = 'Pulp Fiction';
pelicula['nombre'] = 'Pulp Fiction';
nombres[0] = 'Miguel';

pelicula.fecha = '10 de marzo de 1990';

// Ejemplo 2

function keyValuePairs(obj) {
  var keys = Object.keys(obj);
  var pairs = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    pairs.push([key, obj[key]]);
  }
  return pairs;
}

function keyValuePairsBetter(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    keys[i] = [key, obj[key]];
  }
  return keys;
}

// Benchmark

console.time('keyValuePairs()');
keyValuePairs(window);
console.timeEnd('keyValuePairs()');

console.time('keyValuePairsBetter()');
keyValuePairsBetter(window);
console.timeEnd('keyValuePairsBetter()');

// Reto 2

function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var keyValue = arr[i];
    var key = keyValue[0];
    var value = keyValue[1];
    obj[key] = value;
  }
  return obj;
}

// Objetos y métodos

var john = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1990,
  calculateAge: function () {
    var today = new Date();
    var year = today.getFullYear();
    // this.age = year - this.birthYear;
    return year - this.birthYear;
  },
};
