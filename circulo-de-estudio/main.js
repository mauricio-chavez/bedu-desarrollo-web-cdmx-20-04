// function randomInt() {
//   var value = Math.floor(Math.random() * 10);
//   var answer;
//   value > 5 ? (answer = 'yes') : (answer = 'no');
//   return answer;
// }

// var diaSemana = 'lunes';

// switch (diaSemana) {
//   case 'lunes':
//     console.log('Apenas vamos empezando 😔');
//     break;
//   case 'martes':
//     console.log('un día regular');
//     break;
//   case 'miercoles':
//     console.log('ya estamos a la mitad');
//     break;
//   case 'jueves':
//     console.log('ya casi');
//     break;
//   case 'viernes':
//     console.log('vamonos de fiesta');
//     break;
//   case 'sabado':
//     console.log('vamos a descansar');
//     break;
//   case 'domingo':
//     console.log('mañana de nuevo');
//     break;
//   default:
//     console.error('No existe ese día');
//     break;
// }

// ECMAscript

// var dobles = [1, 2, 3].map(numero => numero * 2);

// console.log(dobles);

// function ejecutar() {
//   if (true) {
//     const miVariable = 10;
//   }
//   console.log(miVariable);
// }

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
//   this.eat = function () {
//     console.log(this.name + ' is eating...');
//   };
// }

// function Dog(age) {
//   Animal.call(this, 'Dog', age);
//   this.bark = function () {
//     console.log('Guau! 🐶');
//   };
// }

// var dog = new Dog(10);
// dog.eat();
// dog.bark();

// var cat = new Animal('Cat', 5);
// cat.eat();
// cat.bark(); // Error

// ECMAscript

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(this.name + ' is eating...');
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super('Dog', 10);
//   }

//   bark() {
//     console.log('Guau! 🐶');
//   }
// }

// Prototype

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
//   this.eat = function () {
//     console.log(this.name + ' is eating...');
//   };
// }

// var cat = new Animal('Cat', 5);

function addToList(item) {
  var list = document.querySelector('#lista-compras');
  var listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
}
