//Modules
const inquirer = require("inquirer");
const Word = require("./word");
const colors = require("colors");

wordList = [
  "APPLE",
  "MANGO",
  "PINEAPPLE",
  "PERSIMMON",
  "CANTELOUPE",
  "PAPAYA",
  "BANANA"
];
let select = 0;
let chosenWord = "";
let gameWord = "";
let counter = 0;

//Chooses a word from the wordList array
function startGame() {
  select = Math.floor(Math.random() * wordList.length);
  chosenWord = wordList[select];
  gameWord = new Word(chosenWord);
  gameWord.createWord();
  if (select > -1) {
    wordList.splice(select, 1);
  }
  console.log(
    "You get 8 letter guesses to correctly find the type of fruit.\n Good luck!"
      .cyan
  );
  promptUser();
}

//Allows the user to input guesses and restart the game if they run out of guesses.
function promptUser() {
  if (counter < 8) {
    console.log(gameWord.displayWord());
    inquirer
      .prompt([
        {
          type: "input",
          name: "letter",
          message: "\n Pick a letter and press enter."
        }
      ])
      .then(function(data) {
        checkAnswer(data);
      });
  } else {
    console.log("\n Sorry, you ran out of guesses.\n".red);
    console.log(`The correct answer was ${chosenWord}`.bgGreen);
    chosenWord = "";
    gameWord = "";
    select = 0;
    counter = 0;
    startGame();
  }
}

//Checks to make sure user input was a letter and compares it against the possible letters in the selected word
function checkAnswer(data) {
  if (data.letter.length === 1 && /^[a-zA-Z]+/.test(data.letter)) {
    const letterChecker = data.letter.toUpperCase();
    const temp = gameWord.displayWord();
    gameWord.checkGuess(letterChecker);
    if (temp === gameWord.displayWord()) {
      console.log("\n Sorry, wrong letter!".bgYellow);
      counter++;
      console.log(8 - counter + " guesses remaining.".cyan);
      promptUser();
    } else {
      correctGuess();
    }
  } else {
    console.log(`\nPlease enter a letter, one at a time.\n`.bgRed);
    promptUser();
  }
}

//If the user guesses the correct letter, the word array displays the word with the guessed letters.
//If the entire word is correct, meaning letters are filled in, the game will restart.
function correctGuess() {
  console.log(`\n You guessed right!\n`.bgBlue);
  if (
    chosenWord.replace(/ /g, "") == gameWord.displayWord().replace(/ /g, "")
  ) {
    console.log(gameWord.displayWord());
    console.log(`\n You Win!!!!\n`.bgMagenta);
    chosenWord = "";
    gameWord = "";
    select = 0;
    counter = 0;
    startGame();
  } else {
    promptUser();
  }
}

startGame();
