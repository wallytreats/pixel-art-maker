var body = document.getElementsByTagName('body')[0];
var start = document.getElementById('startButton');
var grid = document.getElementById('grid');
var colorSelector = document.getElementById('colorSelector')
var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')
var yellow = document.getElementById('yellow')
var orange = document.getElementById('orange')
var black = document.getElementById('black')
var white = document.getElementById('white')
var purple = document.getElementById('purple')
var userInput;
var currentColor = '';
var colorOnDeck = document.getElementById('colorOnDeck')



red.addEventListener('click', function colorName (event){
  currentColor = 'red';
  colorOnDeck.style.backgroundColor = 'red';
})
green.addEventListener('click', function colorName (event){
  currentColor = 'green';
  colorOnDeck.style.backgroundColor = 'green';
})
blue.addEventListener('click', function colorName (event){
  currentColor = 'blue';
  colorOnDeck.style.backgroundColor = 'blue';
})
yellow.addEventListener('click', function colorName (event){
  currentColor = 'yellow';
  colorOnDeck.style.backgroundColor = 'yellow';
})
orange.addEventListener('click', function colorName (event){
  currentColor = 'orange';
  colorOnDeck.style.backgroundColor = 'orange';
})
black.addEventListener('click', function colorName (event){
  currentColor = 'black';
  colorOnDeck.style.backgroundColor = 'black';
})
white.addEventListener('click', function colorName (event){
  currentColor = 'white';
  colorOnDeck.style.backgroundColor = 'white';
})
purple.addEventListener('click', function colorName (event){
  currentColor = 'purple';
  colorOnDeck.style.backgroundColor = 'purple';
})

start.addEventListener('click', function (event){
  var inputField = document.getElementById('inputField');
  var userInput = inputField.value;
  makeGrid(userInput);
});

start.addEventListener('click', function (event){
  var removeInterface = document.getElementById('userInt')
    removeInterface.style.display = 'none';
});

grid.addEventListener('click', function (event) {
  event.target.style.backgroundColor = currentColor;  // relace this with current color!!!
});

function makeGrid (userInput){
  for (i=0; i < userInput; i++){
  var tile = document.createElement('div');
  // var cols = 10;
  tile.style.width = '1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '1%';
  tile.style.borderStyle = 'solid'
  tile.style.borderWidth = 'thin'
  grid.appendChild(tile);
  grid.style.marginRight = '15%'
  }
};
