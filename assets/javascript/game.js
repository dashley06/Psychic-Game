

var directionsText = document.getElementById("directions-text");
var userchoiceText = document.getElementById("userchoice-text"); //each letter of the random computer word
var computerchoiceText= document.getElementById("cmputerchoice-text"); // user presses key which is stored in this variable
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var lettersGuessed= document.getElementById("lettersGuessed");
var userWins = 0;
var userLoss= 0;
var lettersGuessed= []; //hold each letter  

var clearGame = false;
var computerChoices = ["enter all the letters"]

//start game
function setup(){
//pick letter randomly
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)]

 //"Press any key to begin" as event.key to start
 document.onkeyup = function(event){ 

    var userGuess = event.key; //store data as var userGuess
    
}

function checkLetter(userGuess){ //run funtion to check answer
            if (userGuess === computerLetter[i]){
                
                userWins++;
                winsText.textContent = 
            }

}
    
    
    
    
    
    //if userGuess === computerWordLetter, then displayCorrectAnswer on browser
        //clear userGuess var
        //run event.key of user pressing button
        //store new data as userGuess
//if userGuess !== computerWordLetter, then UserGuesses -1 AND lettersGuessed (userGuess) display on browser
        //clear userguess var
        //run event.key of user pressing button
        //store as userGuess

//if computerWord === displayCorrectAnswer, then userWins + 1 and clear screen and start from beginning prompt
    //userWins remains constant
//if userGuesses === 0, clear screen
    //userWins remains constant*/