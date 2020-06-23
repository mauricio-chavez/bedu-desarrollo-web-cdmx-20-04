// Imperativo
var numbers = [1, 2, 3, 4, 5];

var doubles = [];

for (var i = 0; i < numbers.length; i++) {
  var double = numbers[i] * 2;
  doubles.push(double);
}

// Declarativo (funcional)

var numbers = [1, 2, 3, 4, 5];

var doubles = numbers.map(function (number) {
  return number * 2;
});

// Inmutabilidad

var counter = 1;

// Mutable
counter = counter + 3;

// Inmutable
var newCounter = counter + 3;

// Ejemplo 1:

var car = {
  brand: 'Nissan',
  model: 'Sentra',
  year: 2020,
};

function addColor(car) {
  return Object.assign({}, car, { color: 'Black' });
}

// Funciones puras

// Sí función pura
function add(a, b) {
  return a + b;
}

// No es función pura porque no devuelve lo mismo siempre
function randomInt(limit) {
  return Math.floor(Math.random() * limit);
}

// No es pura porque tiene efectos secundarios
// var lenguaje = 'Python';

function favoriteLanguage(nombre) {
  return 'Soy ' + nombre + ', mi lenguaje favorito es ' + lenguaje;
}

function cambiarLenguaje(nuevoLenguaje) {
  lenguaje = nuevoLenguaje;
}

var numbers = [1, 2, 3, 4, 5];

// Con side effects
function duplicar(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array
}

// Sin side effects
function duplicar(array) {
  var copia = Array.from(array)
  for (var i = 0; i < copia.length; i++) {
    copia[i] = copia[i] * 2;
  }
  return copia
}

var cart = [
  {
    item: 'Laptop',
    quantity: 1,
  },
];

function addItemToCart(cart, item, quantity) {
  var newCart = Array.from(cart);
  newCart.push({
    item: item,
    quantity: quantity,
  });
  return newCart;
}

// Funciones de primera clase

var numbers = [1, 2, 3, 4, 5];

function double(number) {
  return number * 2;
}

var doubles = numbers.map(double);

// Funciones de alto orden

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map()
var doubles = numbers.map(function (number) {
  return number * 2;
});

// filter()

var even = numbers.filter(function (number) {
  return number % 2 === 0 ? true : false;
});

// reduce()

var sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
});

var odds = numbers.reduce(function (acc, curr) {
  if (curr % 2 !== 0) {
    return acc.concat(curr);
  } else {
    return acc;
  }
}, []);

var toppings = ['pepperoni', 'pimiento', 'salsa de tomate', 'queso'];
var toppingString = toppings.reduce(function (acc, curr) {
  return acc + ' 🍕 ' + curr;
});

var name = 'Mauricio'
var nameArray = name.split('')
var reverseName = nameArray.reduce(function (acc, curr) {
  return curr + acc;
});

// Ejercicio 3

function sumDigits(number) {
  return number
    .toString()
    .split('')
    .map(Number)
    .reduce(function (acc, curr) {
      return acc + curr;
    });
}

// Reto 1:

function flatten(arrays) {
  return arrays.reduce(function (accumulator, current) {
    return accumulator.concat(current)
  }, [])
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]

// Reto 2

function compact(array) {
  return array.filter(function (item) {
    return !!item
  });
}

function compact(array) {
  return array.filter(Boolean);
}

var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]

// Reto 3

// Iteración
function loop(start, test, update, body) {
  for (var value = start; test(value); value = update(value)) {
    body(value);
  }
}

// Recursión
function loop(start, test, update, body) {
  if (test(start)) {
    body(start);
    loop(update(start), test, update, body);
  }
}

var test = function (n) {
  return n > 0;
};

var update = function (n) {
  return n - 1;
};

loop(3, test, update, console.log);
