var inputSearchBox = document.querySelector('.search-box');
var guessButton = document.querySelector('.guess-btn');
var clearButton  = document.querySelector('.clear-btn')
var resetButton = document.querySelector('.reset-btn');
var number = document.querySelector('.number');
var tooHigh = document.querySelector('.too-high');
var lastGuess = document.querySelector('.last-guess');
var minSearch = document.querySelector('.min-search');
var maxSearch = document.querySelector('.max-search');
var randomNumber;
var minNumber = 1;
var maxNumber = 100;

makeRandNumber()
inputSearchBox.addEventListener('keyup', makeButtonsWork);
guessButton.addEventListener('click', guessTheNumber);
clearButton.addEventListener('click', clearANumber);
resetButton.addEventListener('click', resetTheScreen);

function makeButtonsWork() {
  console.log('works')
  if(inputSearchBox.value) {
    guessButton.disabled = false;
    clearButton.disabled = false;
  } else {
    guessButton.disabled = true;
    clearButton.disabled = true;
  }
}

function guessTheNumber(event) {
  event.preventDefault();
  resetButton.disabled = false;
  var guess = parseInt(inputSearchBox.value);
  number.textContent = guess;

  if(guess < minNumber || guess > maxNumber) {
  tooHigh.textContent = `Pick a number between ${minNumber} and ${maxNumber}`; 
  } else if (guess > randomNumber) {
  tooHigh.textContent = 'That is too high';
  } else if( guess < randomNumber){
  tooHigh.textContent = 'That is too low';
  } else if (!parseInt(inputSearchBox.value)) { 
    tooHigh.textContent = 'No letters allowed!'
    number.textContent = 'NaN!'
  } else {
  tooHigh.textContent = 'BOOM!'
  maxNumber = maxNumber + 10;
  minNumber = minNumber -  10;
  }
  clearANumber();
}

function makeRandNumber() {
  randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

}

function clearANumber() {
  inputSearchBox.value = ''; 
}
  
function resetTheScreen() {
  number.textContent = '-';
  tooHigh.textContent = `Pick a number between ${minNumber} and ${maxNumber}`;
}
