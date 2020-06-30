// Event handlers

window.addEventListener('click', function () {
  console.log('Hello World!');
});

// Eventos y nodos del DOM

var button = document.querySelector('button');

button.addEventListener('click', function handler() {
  console.log('Button clicked.');
  button.removeEventListener('click', handler);
});

// Event Object

var button = document.querySelector('button');

button.addEventListener('mousedown', function (event) {
  if (event.button == 0) {
    console.log('Left button');
  } else if (event.button == 1) {
    console.log('Middle button');
  } else if (event.button == 2) {
    console.log('Right button');
  }
});

window.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.shiftKey) {
    console.log('Shift is pressed.');
  }

  if (event.ctrlKey) {
    console.log('Control is pressed.');
  }

  if (event.altKey) {
    console.log('Alt is pressed.');
  }

  if (event.metaKey) {
    console.log('Meta is pressed.');
  }
});

// Tipos de evento

window.addEventListener('mousedown', function () {
  console.log('Mouse is pressed');
});

window.addEventListener('mouseup', function () {
  console.log('Clicking stopped');
});

window.addEventListener('click', function () {
  console.log('Clicked');
});

window.addEventListener('dblclick', function () {
  console.log('Double click');
});
