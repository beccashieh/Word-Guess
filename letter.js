//Constructor for letter.
function Letter() {
  //Empty string to hold the correct letter value.
  let correctLetter = "";
  //Boolean value that checks whether correct letter has been guessed.
  let letterGuessed = false;
  //Function to check if the letter the user input matches the correct letter.
  function checkGuess(character) {
    if (character === correctLetter) {
      letterGuessed = true;
    }
  }
  //Displays either the correct letter or a placeholder depending on the user's guess.
  function display() {
    if (letterGuessed === true) {
      return correctLetter;
    } else {
      return "_";
    }
  }
  checkGuess();
  display();
}

const userInput = new Letter(process.argv);



