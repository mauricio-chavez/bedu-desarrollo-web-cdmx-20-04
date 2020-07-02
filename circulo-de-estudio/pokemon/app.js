var form = document.querySelector('form');
var input = document.querySelector('input');
var nameParagraph = document.querySelector('#name');
var hwParagraph = document.querySelector('#hw');
var typesParagraph = document.querySelector('#types');

function fetchPokemon(id) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => response.json())
    .then(pokemon => {
      renderPokemon(pokemon);
    })
    .catch(err => {
      console.error(err);
      alert('Pokémon not found.');
      input.value = null;
    });
}

function formatTypes(pokemon) {
  return pokemon.types.reduce((types, curr) => {
    return !types ? curr.type.name : types + ', ' + curr.type.name;
  }, '');
}

function renderPokemon(pokemon) {
  var name = pokemon.name;
  var height = pokemon.height;
  var weight = pokemon.weight;
  var types = formatTypes(pokemon);

  nameParagraph.textContent = name;
  hwParagraph.textContent = 'Height: ' + height + ' | Weight: ' + weight;
  typesParagraph.textContent = 'Types: ' + types;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  fetchPokemon(input.value);
});
