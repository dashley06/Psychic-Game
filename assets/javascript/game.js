$(document).ready(function() {

var userWins = 0;
var userLoss= 0;
var lettersGuessed= []; //hold each letter  
var trial = 8; //# of chances
var computerChoices = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerLetter;
var userGuess;


setup();

//run funtion to check answer
function checkLetter(){ 

            if (userGuess === computerLetter){
                userWins++; //increase win counter by 1
                $("#wins-text").text(userWins);
                lettersGuessed.push(userGuess);
                $("#lettersGuessed").text(lettersGuessed);
                $("#show").text(`The correct answer was: ${computerLetter}`);
                $("#alert").text("WINNER!! GOOD JOB!!!");
                setup(); //re-run the game

            } else {
                trial--; //decrease number of chances by 1
                $("#trial").text(trial);
                lettersGuessed.push(userGuess);
                var newArraySpaced = lettersGuessed.join(', ')
                $("#lettersGuessed").text(newArraySpaced);
                end();
            }
    
}   

//restart game
function setup(){
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)].toUpperCase(); //pick letter randomly
    trial = 8;
    lettersGuessed.length = 0;
    console.log(computerLetter);
    }
    
function end(){
    if(trial === 0){ 
        userLoss++;
        $("#losses-text").text(userLoss);//update loss counter in HTML
        $("#show").text(`The correct answer was: ${computerLetter}`);
        $("#alert").text("Sorry, you lost this time.....Guess again to start a new game!");
        setup(); //re-run the game

}
}
          
document.onkeyup = function(event){ 
    userGuess = event.key.toUpperCase();
    $("#show").text(" ");
    $("#alert").text(" ");
    checkLetter();
  
}

});