var lettersGuessed = [];
var correctGuess = [];
var numwins = 0;
var numGuessesRemaining = 10;

document.onkeyup = function(event) {	
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();	
	game(userGuess);
}

//main game
function game(userGuess) {		
	var wordBank = ["foobar"];
	var randWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
	//function that makes the blanks for the word
	blanks(randWord);
	//need to give the length of the blank array to correctGuess
	correctGuess.length = blanks(randWord).length;

	if (checkGuess(lettersGuessed, userGuess)) {
		lettersGuessed.push(userGuess);
	}

	// if already guessed, get out. if ()

	// decrement counter numguessesremaining--;

	// is letter in word? if (randword.charAt(i) == userGuess) { correctguess.push(userguess) } {else lettersguessed.push(userguess)}
		// yes: store in coorrect array
		// no: add it letters guessed

	// write guessed and correct to screen and tries

	
	for (var i = 0; i < correctGuess.length; i++) {
		if (randWord.charAt(i) == userGuess) {
			correctGuess[i] = userGuess;
			lettersGuessed.pop(userGuess);
		}
	}

	console.log(correctGuess);
	console.log(lettersGuessed);
		
}

//display blanks 
function blanks(word) {
	var wordBlank = "";
	var wordBlankArr = [];
	for (var i = 0; i < word.length; i++) {
		wordBlank += "_ ";
		wordBlankArr.push("_");
	}

	var html ="<h3>Current Word</h3>" + "<h4>" + wordBlank + "</h4>";
	document.querySelector('#game').innerHTML = html;
	return wordBlankArr;
}

//check if guess has been made.  if guess has not been made return true to add to lettersGuessed. 
//if false, user already guesses and it won't add to lettersGuessed.
function checkGuess(lettersGuessed, userGuess) {
	if (lettersGuessed.indexOf(userGuess) == -1) {
		return true;
	}
	return false;
}

function displayIncorrectGuesses(lettersGuessed, correctGuess) {
	/*
	declare new array
	look at letters guessed
	look at correct guessed
	take out all correct guessedLetters from lettersGuessed
	*/
	var displayWrongGuess = [];
	
}



