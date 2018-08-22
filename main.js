var inputSearchBox = document.querySelector('.search-box');
var guessButton = document.querySelector('.guess-btn');
var clearButton  = document.querySelector('.clear-btn')
var resetButton = document.querySelector('.reset-btn');
var number = document.querySelector('.number');
var tooHigh = document.querySelector('.too-high');
var lastGuess = document.querySelector('.last-guess');
var randomNumber = Math.floor(Math.random() * Math.floor(100));
console.log(randomNumber);
var minNumber = 1;
var maxNumber = 100;

inputSearchBox.addEventListener('keydown', makeButtonsWork);
guessButton.addEventListener('click', guessTheNumber);//
clearButton.addEventListener('click', clearANumber);
resetButton.addEventListener('click', resetTheScreen);

function makeButtonsWork() {
  if(inputSearchBox.value === '') {
      guessButton.disabled = true;
      clearButton.disabled = true;
  } else {
      guessButton.disabled = false;
      clearButton.disabled = false;
  }
}

function guessTheNumber(event) {
  event.preventDefault();
  resetButton.disabled = false;
  var guess = parseInt(inputSearchBox.value);
  console.log('hello')
  number.textContent = guess;
  if (guess < minNumber || guess > maxNumber) {
    tooHigh.textContent = `Pick a number between ${minNumber} and ${maxNumber}`;
  } else if (guess > randomNumber) {
    tooHigh.textContent = 'That is too high';
  } else if( guess < randomNumber){
    tooHigh.textContent = 'That is too low';
  } else {
    tooHigh.textContent = 'BOOM!'
  }
  clearANumber();
}

function isNumber(event) {
  preventDefault(event)
  console.log('hi')
  var keycode=event.keycode;
  if(keycode> 48 && keycode<57){
     guessTheNumber();
  } else {
    console.log('whats a number');
  }
  return false;
}


function clearANumber() {
  inputSearchBox.value = ''  
}
  


function resetTheScreen() {
  number.textContent = '';
tooHigh.textContent = `Pick a number betweer ${minNumber } and ${maxNumber}`;
}
