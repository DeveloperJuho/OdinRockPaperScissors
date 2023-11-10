// global variables
let yourScore = 0;
let opponentScore = 0;

let yourScoreText = "";
let opponentScoreText = "";

let gameParagraph = "";

// Load up stuff after DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    // Scoreboard

    yourScoreText = document.querySelector(".yourScore");
    opponentScoreText = document.querySelector(".opponentScore");

    updateScore();

    // Paragraph

    gameParagraph = document.querySelector("p");

    // Buttons
    const buttons = document.querySelectorAll("button");
    buttonsArray = Array.from(buttons);

    for(let i = 0; i <= 2; i++){
        buttonsArray[i].addEventListener("click", () => 
        playRound(buttonsArray[i].textContent, getComputerChoice()));
    }

    buttonsArray[3].addEventListener("click", () =>{
        opponentScore = 0;
        yourScore = 0;

        updateScore();
        gameParagraph.textContent = "First to score five wins!"
        buttonsArray[3].textContent = "Reset!";
    })
});


// Play a round of RPS

function playRound(playerSelection, computerSelection){

    playerSelection = String(playerSelection).toUpperCase();
    computerSelection = String(computerSelection);

    // First check if game is over

    if(yourScore == 5 || opponentScore == 5){
        gameParagraph.textContent = "The game has already ended, press play again to play again.";
        return "Game has already ended";
    }

    // Draw
    if(playerSelection == computerSelection.toUpperCase()){
        gameParagraph.textContent = "Match was a draw!"
        return "Game was a draw";
    }

    // Functionality for selecting rock
    if(playerSelection == "rock".toUpperCase()){
        if(computerSelection == "Scissors"){
            yourScore++;
            gameParagraph.textContent = "Opponent chose Scissors. You Win!";
        }
        else{
            opponentScore++;
            gameParagraph.textContent = "Opponent chose Paper. You Lose!";
        }
    }

    // Functionality for selecting paper
    else if(playerSelection == "paper".toUpperCase()){
        
        if(computerSelection == "Scissors"){
            opponentScore++;
            gameParagraph.textContent = "Opponent chose Scissors. You Lose!";
        } 
        else{
            yourScore++;
            gameParagraph.textContent = "Opponent chose Rock. You Win!";
        }
    }

    // Functionality for selecting scissors
    else if(playerSelection == "scissors".toUpperCase()){
        
        if(computerSelection == "Rock"){
            opponentScore++;
            gameParagraph.textContent = "Opponent chose Rock. You Lose!";
        } 
        else{
            yourScore++;
            gameParagraph.textContent = "Opponent chose Paper. You Win!";
        }
    }

    // Just a failsafe

     else{
        gameParagraph.textContent = "Something went wrong";
        return "Something went wrong";
     }

     // Check if the game is ending
     
     updateScore();
     return "Round ended";
}

// Get computers choice

function getComputerChoice(){
    let computerChoice = 0;
    // Randomize the choice
    let x = Math.floor(Math.random()*3);
    // Select correct choice according to randomizer, also unnecessary as numbers would have worked in playRound function too
    switch(x){
        case 0:
            computerChoice = "Scissors";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Rock";
            break;
        default:
            console.log("Something went wrong");
            break;
    }
    // Return the choice
    return computerChoice;
}
// This has been called so many times, so reformatting it to a function

function updateScore(){
    yourScoreText.textContent = yourScore;
    opponentScoreText.textContent = opponentScore;

    if(yourScore == 5){
        gameParagraph.textContent = (`You won the game with score of ${yourScore} - ${opponentScore}`);
        buttonsArray[3].textContent = "Play again!";
    }
    else if(opponentScore == 5){
        gameParagraph.textContent = (`You lost the game with score of ${yourScore} - ${opponentScore}`);
        buttonsArray[3].textContent = "Play again!";
    }
}

