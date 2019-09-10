
var directionsText = document.getElementById("directions-text");
var userchoiceText = document.getElementById("userchoice-text");
var computerchoiceText= document.getElementById("cpmputerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var lettersGuessed_char= document.getElementById("lettersGuessed");
var show= document.getElementById("show");
var userWins = 0;
var userLoss= 0;
var lettersGuessed= []; //hold each letter  
var trial = 8; //# of chances
var computerChoices = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerLetter = "";
var userGuess;

//start game
function setup(){

computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //pick letter randomly
trial = 8;
lettersGuessed = [];
}

function checkLetter(){ //run funtion to check answer
            if (userGuess === computerLetter){
                userWins++; //increase win counter by 1
                winsText.innerHTML = userWins;//change the HTML to display win
                setup(); //re-run the game
            }
            else{
                trial--; //if the guess was wrong, decrease number of chances by 1
                document.getElementById("trial").innerHTML = trial; //show remaining chances in HTML
                lettersGuessed.push(userGuess);
                var temp = "";
        
                //loop to hold the letters already guessed and display on screen
                for(var i=0;i<lettersGuessed.length;i++){
                    temp = temp + " " + lettersGuessed[i] + ",";
                    lettersGuessed_char.innerHTML = temp.toUpperCase();
                }
            }
                if(trial === 0){ //restarts game if user runs out of chances
                 userLoss++;
                lossesText.innerHTML = userLoss;//update loss counter in HTML
                show.innerHTML = computerLetter.toUpperCase(); //show in HTML
                setup(); //re-run the game
                }
                
            }   
          
            console.clear()

document.onkeyup = function(event){ 
    userGuess = event.key; //store data as userGuess
    checkLetter();
    console.log(userGuess);
    
    show.innerHTML = computerLetter.toUpperCase(); //show in HTML
    
        }
    