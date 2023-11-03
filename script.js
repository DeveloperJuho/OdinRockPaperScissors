// global variables
let yourScore = 0;
let opponentScore = 0;

// Play a round of RPS

function playRound(playerSelection, computerSelection){

    playerSelection = String(playerSelection).toUpperCase();
    computerSelection = String(computerSelection);
    /*/ Logic behind this choice is that
        1) Check for draw
            if not then proceed
        2) Check what player chose
        3) Check that against opponent choice
        4) Declare winner
    /*/

    // Draw
    if(playerSelection == computerSelection.toUpperCase()){
        return "Match was a draw!"
    }

    // Functionality for selecting rock
    if(playerSelection == "rock".toUpperCase()){
        // no need to uppercase this as these are hardcoded for computer, same goes for the rest of these
        if(computerSelection == "Scissors"){
            yourScore++;
            return "Opponent chose Scissors. You Win!";
        }
        // no need for else-clause as this will be either resolved during if or it will land here
        opponentScore++;
        return "Opponent chose Paper. You Lose!";
    }

    // Functionality for selecting paper
    else if(playerSelection == "paper".toUpperCase()){
        // no need to uppercase this as these are hardcoded for computer, same goes for the rest of these
        if(computerSelection == "Scissors"){
            opponentScore++;
            return "Opponent chose Scissors. You Lose!";
        } 
        // no need for else-clause as this will be either resolved during if or it will land here
        yourScore++;
        return "Opponent chose Rock. You Win!";
    }

    // Functionality for selecting scissors
    else if(playerSelection == "scissors".toUpperCase()){
        // no need to uppercase this as these are hardcoded for computer, same goes for the rest of these
        if(computerSelection == "Rock"){
            opponentScore++;
            return "Opponent chose Rock. You Lose!";
        } 
        // no need for else-clause as this will be either resolved during if or it will land here
        yourScore++;
        return "Opponent chose Paper. You Win!";
    }

    // Just a failsafe

     else return "Something went wrong";
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

// Players choice, in a separate function so that the choice will be in correct form and for clarity

function playersChoice(){
    let correctForm = false;
    let choice;
    // Loop until player's prompt is passed
    while(correctForm == false){
        choice = prompt("Rock, paper or scissors?");
        choice = String(choice).toUpperCase();
        if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
            correctForm = true;
        }
    }
    

    return choice;
}

// Actual game function

function game(){
    // Nullify scores
    opponentScore = 0;
    yourScore = 0;

    // Initalize playerchoice
    let playerChoice = 0;

    // Play five rounds
    for (let i = 0; i < 5; i++){
        // Players choice, call the function
        playerChoice = playersChoice();
        // Play the round and inform the return value to console
        console.log(playRound(playerChoice, getComputerChoice()));
        // Inform the situation after every round
        console.log(`Your point total is ${yourScore} and computers point total is ${opponentScore}`);
    }
    // Declare the ending result
    if (opponentScore > yourScore){
        console.log(`You lost the game with score of ${yourScore} - ${opponentScore}`);
    }
    else if (opponentScore < yourScore){
        console.log(`You won the game with score of ${yourScore} - ${opponentScore}`);
    }
    else{
        console.log(`Game was a draw with score of ${yourScore} - ${opponentScore}`);
    }
    // Ending notes
    console.log("If you want to play again, type game() in to the browsers console");
}

// Start game when loaded
game();
