// POO

var john = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1990,
  calculateAge: function () {
    var today = new Date();
    var year = today.getFullYear();
    return year - this.birthYear;
  },
};

// Objeto
// Entidad que contiene atributos y métodos (coloquialmente: características y acciones)

var barco = {
  color: 'blanco',
  tipo: 'trasantlántico',
  navegar: function () {
    console.log('Navegando...');
  },
};

// Constructores

var john = {
  name: 'John',
  birthYear: 1990,
  job: 'Developer',
};

var mark = {
  name: 'Mark',
  birthYear: 1985,
  job: 'Teacher',
};

var jane = {
  name: 'Jane',
  birthYear: 1975,
  job: 'Designer',
};

// Ejemplo 1

function Person(name, birthYear, job) {
  return {
    name: name,
    birthYear: birthYear,
    job: job,
  };
}

var jane = Person('Jane', 1975, 'Designer');

// Reto 1

function Vec(x, y) {
  return {
    x: x,
    y: y,
    plus: function (vec2) {
      var x = this.x + vec2.x;
      var y = this.y + vec2.y;
      return Vec(x, y);
    },
    minus: function (vec2) {
      var x = this.x - vec2.x;
      var y = this.y - vec2.y;
      return Vec(x, y);
    },
    length: function () {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    },
  };
}

// This

function Person(name, birthYear, job) {
  return {
    name: name,
    birthYear: birthYear,
    job: job,
  };
}

function Person(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

var john = new Person('John', 1990, 'Developer');
var jane = new Person('Jane', 1975, 'Designer');

// POO: Abstracción, polimorfismo, encapsulamiento, herencia

// Herencia

var Person = function (name, job) {
  this.name = name;
  this.job = job;
  this.upperCaseName = function () {
    return name.toUpperCase();
  };
};

var Developer = function (name, skills, yearsOfExperience) {
  Person.call(this, name, 'Developer');
  this.skills = skills;
  this.yearsOfExperience = yearsOfExperience;
};

// Método estático

Developer.from = function () {};

function Group() {
  this.members = [];
  this.add = function (value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  };
  this.has = function (value) {
    return this.members.includes(value);
  };
}

Group.from = function (array) {
  var group = new Group();
  for (var i = 0; i < array.length; i++) {
    group.add(array[[i]]);
  }
  return group;
};

// Prototype

var Person = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
  this.calculateAge = function () {
    var today = new Date();
    var year = today.getFullYear();
    return year - this.birthYear;
  };
};

var john = new Person('John', 1990, 'Developer');
var jane = new Person('Jane', 1975, 'Designer');

Person.prototype.nameToUpper = function () {
  return this.name.toUpperCase();
};
