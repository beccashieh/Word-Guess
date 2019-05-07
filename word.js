const Letter = require("./letter");

function Word(wordArr) {
    this.wordArr = wordArr;
    this.word = [];
    this.createWord = function(){
        for (let i = 0; i < wordArr.length; i++){
            let letter = new Letter(wordArr[i]);
            this.word.push(letter);
        }
    }
    this.displayWord = function(){
        let wordDisplay = [];
        for (let i = 0; i < this.word.length; i++){
            wordDisplay.push(this.word[i].display());
        }
        return wordDisplay.join(" ");
    }
    this.checkGuess = function(guess){
        for (let i = 0; i < this.word.length; i++){
            this.word[i].checkGuess(guess);
        }
    }
}

module.exports = Word;

