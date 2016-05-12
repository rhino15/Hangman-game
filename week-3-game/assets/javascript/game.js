var numWins = 0;
var numLosses = 0;
var lettersGuessed = [];
var correctGuess = [];
var numGuessesRemaining = 10;
var wordBank = ["Princess Peach"];
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
randWord = randWord.replace(" ", "");
//function that makes the blanks for the word, and fills in the correct guesses.
correctGuess = blanks(randWord);

document.onkeyup = function(event) {	
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();	
	game(userGuess, wordBank, randWord);
	//calls the function to check to see if the user has won or lost
	var status = winOrLose(numGuessesRemaining, correctGuess);
	gameOver(status);

	var html ="<h4>" + correctGuess.join(" ") + "</h4>" + "<h3>Guesses remaining: " + numGuessesRemaining + "</h3>" + 
	"<h3>Wins " + numWins + "</h3>" + "<h3>Losses: " + numLosses + "</h3";

	document.querySelector('#game').innerHTML = html;

	if (status == 0) {
		resetState();
	} else if (status == 1) {
		resetState();
	}
}
//main game
function game(userGuess, wordBank, randWord) {
	//debugger;
    //this if/else branch checks to see if the letter has been guessed, if not it will run into
    //calcCorrectandIncorrectGuesses.  if it does, and if it is guessed correctly it will return out of it
    //if not, push the guessed letter into lettersGuessed and keep a counter to check against numguessesremaining
	if (checkGuess(lettersGuessed, userGuess)) {
	    if (correctGuess.indexOf(userGuess) > 0) {
	  		return;
	   } else {
	   	lettersGuessed.push(userGuess);
	   	var lengthCheck = lettersGuessed.length;
	   }
	}
	//calculates whether or not which array the letters guessed will be pushed
	calcCorrectAndIncorrectGuesses(lettersGuessed, correctGuess, randWord, userGuess);
	//this guards against the counter going down when the user hits the same letter multiple times,
	//and will keep the correct amount of numguessesremaining.
	if (lettersGuessed.length >= lengthCheck) {
		numGuessesRemaining--;
	}
}

//display blanks 
function blanks(word) {
	var wordBlankArr = [];
	for (var i = 0; i < word.length; i++) {
		wordBlankArr.push("_");
	}

	return wordBlankArr;
}

//check if guess has been made.
function checkGuess(lettersGuessed, userGuess) {
	if (lettersGuessed.indexOf(userGuess) == -1) {
		return true;
	}
	return false;
}

//determines which array will get the user's guesses
function calcCorrectAndIncorrectGuesses(lettersGuessed, correctGuess, chosenWord, userGuess) {
	for (var i = 0; i < correctGuess.length; i++) {
		if (chosenWord.charAt(i) == userGuess) {
			correctGuess[i] = userGuess;
		} 
	}

	if (correctGuess.indexOf(userGuess) >= 0) {
		lettersGuessed.pop(userGuess);
	}
}

function winOrLose(numGuessesRemaining, correctGuess) {
	if (numGuessesRemaining == 0) {
		return 0;
	} 

	var check = 0;
	for (var i = 0; i < correctGuess.length; i++) {
		if (correctGuess.indexOf("_") == - 1) {
			check++;
		}
	}

	if (numGuessesRemaining > 0 && check == correctGuess.length) {
		return 1;
	}
}

function gameOver(status) {
	if (status == 0) {
		numLosses++;

	} else if (status == 1) {
		numWins++;
	}

}

function resetState() {
	randWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
	correctGuess = blanks(randWord);
	numGuessesRemaining = 10;
	lettersGuessed = [];
}








