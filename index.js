const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rock_button = document.getElementById("rock-button");
const paper_button = document.getElementById("paper-button");
const scissors_button = document.getElementById("scissors-button");
const resultDiv = document.getElementById("result");

let isPlaying = true;

let userInput;
let computerInput;
let result;

let userScore = 0;
let compScore = 0;

const rockRock = "Tie game!";
const rockPaper = "You lose! Paper beat rock!";
const rockScissors = "You win! Rock beat scissors!";
const paperRock = "You win! Paper beat rock!";
const paperPaper = "Tie game!";
const paperScissors = "You lose! Scissors beat paper!";
const scissorsRock = "You lose! Rock beat scissors!";
const scissorsPaper = "You win! Scissors beat paper!";
const scissorsScissors = "Tie game!";

const userWin = "User is the winner!";
const compWin = "Computer is the winner!";
const tieGame = "There is no winner!";

function getComputerChoise(){
    let rng = Math.random();
    let computerInput = "";
    (rng<0.33)? computerInput = "rock" :
    (rng<0.66)? computerInput = "paper" :
    computerInput = "scissor";
    return computerInput;
}

function playRound(userInput,computerInput){

    if( userInput === "rock" ){
        (computerInput === "rock")? resultDiv.textContent = rockRock :
        (computerInput === "paper")? resultDiv.textContent = rockPaper :
        resultDiv.textContent = rockScissors;
    }else if( userInput === "paper" ){
        (computerInput === "rock")? resultDiv.textContent = paperRock :
        (computerInput === "paper")? resultDiv.textContent = paperPaper :
        resultDiv.textContent = paperScissors;
    }else if( userInput === "scissors" ){
        (computerInput === "rock")? resultDiv.textContent = scissorsRock :
        (computerInput === "paper")? resultDiv.textContent = scissorsPaper :
        resultDiv.textContent = scissorsScissors;
    }

    if(resultDiv.textContent === rockScissors || resultDiv.textContent === paperRock || resultDiv.textContent === scissorsPaper){
        userScore++;
        playerScore.textContent = userScore;
    }else if(resultDiv.textContent === rockPaper || resultDiv.textContent === paperScissors || resultDiv.textContent === scissorsRock){
        compScore++;
        computerScore.textContent = compScore;
    }

    if(userScore === 5 || compScore === 5){
        isPlaying = false;
        (userScore > compScore)? resultDiv.textContent = userWin :
        (userScore === compScore)? resultDiv.textContent = tieGame :
        resultDiv.textContent = compWin;
    }
}

rock_button.addEventListener('click', ()=>{
    isPlaying && playRound('rock',getComputerChoise());
});
paper_button.addEventListener('click', ()=>{
    isPlaying && playRound('paper',getComputerChoise());
});
scissors_button.addEventListener('click', ()=>{
    isPlaying && playRound('scissors',getComputerChoise());
});