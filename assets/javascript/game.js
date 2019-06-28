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





document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess)
    
    
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess)

    usedGuess.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        alert('you win!');
        numGuessLeft = 9;
        usedGuess.length = 0;

    } 
    else if (numGuessLeft == 0){
        losses++;
        numGuessLeft = 9;
        usedGuess.length = 0;
        console.log(losses);
        alert('no more guesses for you!')
    }
    else if(userGuess !== computerGuess){
        numGuessLeft--;
        alert('you lose')
    }



}

var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Total Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuessLeft + "</p>" +
        "<p>Your Guesses so far: " + usedGuess + "</p>"
        ;
      
        document.querySelector('#game').innerHTML = html;