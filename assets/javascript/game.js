var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"
]


var wins = 0;
var losses = 0;
var ties = 0;
var maxNumGuess = 9;
var usedGuess = [];
var numGuessLeft = 9;
var isFinished = false;

var numWins = document.getElementById('numWins');
var numLoses = document.getElementById('numLoses');
var guessLeft = document.getElementById('numGuessLeft');




numWins.textContent = 'Wins: ' + wins;
numLoses.textContent = 'Loses: ' + losses;
guessLeft.textContent = 'Guesses Remaining: ' + numGuessLeft



document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)
    
    
    var ans = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(ans)

    if (userGuess === ans) {
        alert('you win!')
    } 
    else if (numGuessLeft == 0){
        losses++;
        numGuessLeft = 9;
        usedGuess.length = 0;
        console.log(losses);

    }
    else if(userGuess !== ans){
        numGuessLeft--;
        alert('you lose')
    }



}