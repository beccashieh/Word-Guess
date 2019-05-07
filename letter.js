//Constructor for letter.
function Letter(alpha) {
  //Empty string to hold the correct letter value.
  this.alpha = alpha;
  //Boolean value that checks whether correct letter has been guessed.
  this.letterGuessed = false;
  //Function to check if the letter the user input matches the correct letter.
  this.checkGuess = function(character) {
    if (character === this.alpha) {
      this.letterGuessed = true;
    }
  }
  //Displays either the correct letter or a placeholder depending on the user's guess.
  this.display = function() {
    if (this.alpha === " "){
      return " ";
    }
    else if (!this.letterGuessed) {
      return "_";
    } else {
      return this.alpha;
    }
  }
}

module.exports = Letter;



