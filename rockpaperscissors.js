//Computer random logic for rock, papers, scissors

// Variables
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

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

// RPS Logic
function playRound(playerChoice){
    computerChoice = getComputerChoice()
    if (playerChoice == computerChoice) {    // Tie
        console.log("Tie!");
        return
    } else if (playerChoice == "Paper" && computerChoice == "Rock" || // player wins
               playerChoice == "Rock" && computerChoice == "Scissors" ||
               playerChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You Win! " + playerChoice + " beats " + computerChoice + ".");
        playerScore++
        rounds++
        return 
    } else {
        console.log("You Lose! " + computerChoice + " beats " + playerChoice + "."); // Computer wins
        computerScore++
        rounds++
        return
    }
}
// Click buttons to start game
rockBtn.addEventListener("click", () => {playRound("Rock")});
paperBtn.addEventListener("click", () => {playRound("Paper")});
scissorsBtn.addEventListener("click", () => {playRound("Scissors")});
