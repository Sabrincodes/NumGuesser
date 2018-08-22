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
//create min and max variables and assign each to 1 an 100
inputSearchBox.addEventListener('keydown', makeButtonsWork);
guessButton.addEventListener('click', guessTheNumber);//
clearButton.addEventListener('click', clearANumber);
resetButton.addEventListener('click', resetTheScreen);

function makeButtonsWork() {
  // console.log(randomNumber)
  if(inputSearchBox.value === '') {//**comparin value to someting else
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
    // mixMax()
  }
  clearANumber();
}