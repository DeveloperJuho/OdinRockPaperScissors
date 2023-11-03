// global variables

// For now let's keep player selection as rock

const playerChoice = "Rock";

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
        if(computerSelection == "Scissors") return "Opponent chose Scissors. You Win!";
        // no need for else-clause as this will be either resolved during if or it will land here
        return "Opponent chose Paper. You Lose!";
    }

    // Functionality for selecting paper
    else if(playerSelection == "paper".toUpperCase()){
        // no need to uppercase this as these are hardcoded for computer, same goes for the rest of these
        if(computerSelection == "Scissors") return "Opponent chose Scissors. You Lose!";
        // no need for else-clause as this will be either resolved during if or it will land here
        return "Opponent chose Rock. You Win!";
    }

    // Functionality for selecting scissors
    else if(playerSelection == "scissors".toUpperCase()){
        // no need to uppercase this as these are hardcoded for computer, same goes for the rest of these
        if(computerSelection == "Rock") return "Opponent chose Rock. You Lose!";
        // no need for else-clause as this will be either resolved during if or it will land here
        return "Opponent chose Paper. You Win!";
    }

    // Just a failsafe

     else return "Something went wrong";
}

// Get computers choice

function getComputerChoice(){
    let computerChoice = 0;

    let x = Math.floor(Math.random()*3);

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


    return computerChoice;
}



console.log(getComputerChoice());