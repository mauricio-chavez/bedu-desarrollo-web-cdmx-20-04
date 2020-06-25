// Ejercicio 2

var paragraphs = document.getElementsByTagName('p');
var contenedor = document.getElementById('contenedor');

var segundo = paragraphs[2];
var tercero = paragraphs[1];

contenedor.insertBefore(segundo, tercero);

// setTimeout

setTimeout(function () {
  console.log('Hola');
}, 5000);

// Crear nodos

var nuevoNodo = document.createElement('h3');
var nuevoTexto = document.createTextNode('Mi título');
nuevoNodo.appendChild(nuevoTexto)

console.log(nuevoNodo);

// Atributos

var anchor = document.getElementById('link');

console.log(anchor.href)
