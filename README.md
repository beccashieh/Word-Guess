# Word-Guess
##Command line word guess game.
- This JavaScript Node application uses constructors and linked files to take a user input (guess) and compare it to a randomly selected word. 
- The letter.js file contains the letter constructor which checks the letter is entered and either displays the correctly guessed letter or displays the placeholder underscore.
- The word.js file contains the word constructor which is dependent on the letter.js file to grab the letters, create the word, and display it.
- The game logic is contained in the index.js file. This file is dependent on the word.js file, as well as the colors npm module, and inquirer. 


## Instructions
- From the terminal, user will need to type:
```
node index.js

```
- The user will be prompted to guess a letter for the randomly chosen word. 
- The user will have 8 chances to guess the correct letters for the word. 
- Correct guesses will be displayed.
- If the user runs out of guesses, a message will appear letting them know the correct word and the game will start again. 
- If the user guesses correctly, a message will appear letting them know they guessed the word. 

## Technologies used

- JavaScript
- node.js
- VS Code

