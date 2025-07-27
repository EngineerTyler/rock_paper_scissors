//Computer random logic for rock, papers, scissors

// Initialize Scoring
let humanScore = 0;
let computerScore = 0;

// Computer Choice
function getComputerChoice(){
    let RPC = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*3);
    let computerChoice = RPC[random];
    return computerChoice
}

// Human Choice
function getHumanChoice(humanChoice){
    humanChoice = humanChoice.toUpperCase().at(0) + humanChoice.slice(1).toLowerCase();
    return humanChoice
}

// RPS Rounds
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {    // Tie
        console.log("Tie!")
        return
    } else if (humanChoice == "Paper" && computerChoice == "Rock" || // Human wins
               humanChoice == "Rock" && computerChoice == "Scissors" ||
               humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++
        return 
    } else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + "."); // Computer wins
        computerScore++
        return
    }
}

// UI
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {getHumanChoice("rock")});
paperBtn.addEventListener("click", () => {getHumanChoice("paper")});
scissorsBtn.addEventListener("click", () => {getHumanChoice("scissors")});

//Play Game
