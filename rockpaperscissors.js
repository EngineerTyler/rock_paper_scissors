//RPS logic

// Variables
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const roundCount = document.querySelector(".roundCount");
const playerScoreCount = document.querySelector(".playerScoreCount");
const computerScoreCount = document.querySelector(".computerScoreCount");

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

// Computer Choice
function getComputerChoice(){
    let RPC = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*3);
    let computerChoice = RPC[random];
    return computerChoice
}

// RPS Logic and Scoreboard
function playRound(playerChoice){
    computerChoice = getComputerChoice()
    if (playerChoice == computerChoice) { // Tie
        console.log("Tie!");
        rounds++
        roundCount.innerText = `Round ${rounds}`;
        return
    } else if (playerChoice == "Paper" && computerChoice == "Rock" || // player wins
               playerChoice == "Rock" && computerChoice == "Scissors" ||
               playerChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You Win! " + playerChoice + " beats " + computerChoice + ".");
        rounds++
        playerScore++
        playerScoreCount.innerText = `Player: ${playerScore}`;
        roundCount.innerText = `Round ${rounds}`;
        return 
    } else { // Computer wins
        console.log("You Lose! " + computerChoice + " beats " + playerChoice + ".");
        rounds++
        computerScore++
        computerScoreCount.innerText = `Computer: ${computerScore}`;
        roundCount.innerText = `Round ${rounds}`;
        return
    }
}

// Click buttons to start game
rockBtn.addEventListener("click", () => {playRound("Rock")});
paperBtn.addEventListener("click", () => {playRound("Paper")});
scissorsBtn.addEventListener("click", () => {playRound("Scissors")});
