//Computer random logic for rock, papers, scissors

// Computer Choice
function getComputerChoice(){
    let RPC = ["Rock","Paper","Scissors"];              // RPC choice
    let random = Math.floor(Math.random()*3);           // Random number gen.
    let computerChoice = RPC[random];                        // Select random RPC
    return computerChoice
}
// Human Choice
function getHumanChoice(){                              // Human Choice
    let humanChoice = prompt("Choose Rock, Papers or Scissors");
    humanChoice = humanChoice.toUpperCase().at(0) + humanChoice.slice(1).toLowerCase();
    return humanChoice
}

// Initialize Scoring
let humanScore = 0;
let computerScore = 0;

// Game
function playRound(humanChoice, computerChoice){
    let HC_length = humanChoice.length
    let CC_length = computerChoice.length
    if (HC_length == CC_length) {                          // Tie logic
        console.log("Tie!")
        return
    } else if (HC_length > CC_length && HC_length < 6){    // Paper > Rock
        console.log("You win! Paper beats Rock!");
        humanScore++
        return
    } else if (HC_length < CC_length && CC_length != 5){   // Rock > Scissors
        console.log("You win! Rock beats Scissors!");
        humanScore++
        return
    } else if (HC_length > CC_length && CC_length != 4){   // Scissors > Paper
        console.log("You win! Scissors beats Paper!");
        humanScore++
        return
    } else {
        console.log("You're a LOSER! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++
        return
    }
}

// "5" Rounds
function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Human: " + humanScore + " vs Computer: " + computerScore);
    }
}


playGame()