// Objective: 
// show user prompt
// collect and standardize user's input
// return input
function getPlayerChoise(){
    let promptText = "Enter your choise: \n(rock,paper,scissors)";
    let userInput = prompt(promptText);
    userInput = userInput.toLowerCase();
    return userInput;
}

// computer choose choise randomly via rng
function getComputerChoise(){
    let rng = Math.random();
    let computerInput = "";
    (rng<0.33)? computerInput = "rock" :
    (rng<0.66)? computerInput = "paper" :
    computerInput = "scissor";
    return computerInput;
}

// Objective: play a single round
// create a global variable that store user input and computer choise
let userInput;
let computerInput;

// result for single round
let result;

// possible outcome text
const rockRock = "Tie game!";
const rockPaper = "You lose! Paper beat rock!";
const rockScissors = "You win! Rock beat scissors!";
const paperRock = "You win! Paper beat rock!";
const paperPaper = "Tie game!";
const paperScissors = "You lose! Scissors beat paper!";
const scissorsRock = "You lose! Rock beat scissors!";
const scissorsPaper = "You win! Scissors beat paper!";
const scissorsScissors = "Tie game!";

// pass user and computer input as argument
function playRound(userInput,computerInput){

    // decide outcome & return result
    if( userInput == "rock" ){
        (computerInput == "rock")? result = rockRock :
        (computerInput == "paper")? result = rockPaper :
        result = rockScissors;
    }else if( userInput == "paper" ){
        (computerInput == "rock")? result = paperRock :
        (computerInput == "paper")? result = paperPaper :
        result = paperScissors;
    }else if( userInput == "scissors" ){
        (computerInput == "rock")? result = scissorsRock :
        (computerInput == "paper")? result = scissorsPaper :
        result = scissorsScissors;
    }else{
        alert("Invalid input. Please refer to UI once again.");
    }

    // show the result
    console.log(result);
    return result;
}

// Objective: code a function that contain following functionality

// Constraints:
// keep score for user and computer
let userScore = 0;
let computerScore = 0;

function game(){
    // call playRound function 5 times
    for(let i=0; i<5; i++){
        
        // get user input and computer input through function
        userInput = getPlayerChoise();
        computerInput = getComputerChoise();
        
        // store result to result variable
        let result = playRound(userInput,computerInput);

        // calculate user and computer score
        if(result == rockScissors || result == paperRock || result == scissorsPaper){
            userScore++;
        }else if(result == rockPaper || result == paperScissors || result == scissorsRock){
            computerScore++;
        }
    }
    
    // final result text
    const userWin = "User is the winner!";
    const compWin = "Computer is the winner!";
    const tieGame = "There is no winner!";

    // display result via console
    (userScore > computerScore)? console.log(userWin) :
    (userScore == computerScore)? console.log(tieGame) :
    console.log(compWin);
}

game();