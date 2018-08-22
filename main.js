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