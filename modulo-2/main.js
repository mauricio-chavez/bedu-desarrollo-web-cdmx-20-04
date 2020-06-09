// 1

var usuarioAutenticado = false

if (usuarioAutenticado) {
  console.log('¡Bienvenido!');
} else {
  console.log('Inicia sesión primero');
}

// 2

var edad = 30;
var tienePermiso = false;

if (edad >= 18 || tienePermiso) {
  console.log('Entra');
} else {
  console.log('No puedes pasar');
}

// 3

var time = 9;
var greeting;

if (time < 12) {
  greeting = "Good morning";
}

if (time < 20) {
  greeting = "Good afternoon";
}

if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting) // Good afternoon

// 4

var autenticado = true;
var esAdministrador = true;

if (autenticado) {
  console.log('Bienvenido');
} else {
  console.log('No puedes pasar');
}

if (esAdministrador) {
  console.log('Hola administrador');
}

// 5

var time = 13;
var greeting;

if (time < 12) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good afternoon';
} else if (time >= 20) {
  greeting = 'Good evening';
}

console.log(greeting)

// 6

var edad = 18;

switch (edad) {
  case 1:
    console.log('Tienes un año');
    break;
  case 18:
    console.log('Ya eres mayor de edad');
    break;
  default:
    console.log('Hola');
    break;
}

// 7

var day = 2;
var text;

switch (day) {
  case 0:
    text = 'Sunday';
    break;
  case 1:
    text = 'Monday';
    break;
  case 2:
    text = 'Tuesday';
    break;
  case 3:
    text = 'Wednesday';
    break;
  case 4:
    text = 'Thursday';
    break;
  case 5:
    text = 'Friday';
    break;
  case 6:
    text = 'Saturday';
    break;
  default:
    text = 'Error';
}

console.log(text); // Tuesday

// 8

var speed = 120;
var message;

message = speed > 100 ? "You're going too fast!" : 'Under the limit';

console.log(message);

// 9

var html = '<h1>Hola</h1>';

if (html) {
  console.log(html);
} else {
  console.log('No hay contenido para mostrar');
}

var resultado

if (resultado) {
  console.log('El resultado es:', resultado);
} else {
  console.log('No hay resultado');
}

// 10

/* 
PARTES DEL FOR:

1) Inizialización
2) Condición
3) Actualización
*/

console.log('El ciclo empezó');

for (var i = 0; i < 10; i++) {
  console.log('Estoy dentro del ciclo');
  console.log(i);
}

console.log('El ciclo terminó');

// 11

var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
