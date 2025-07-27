// Variables
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const roundCount = document.querySelector(".round-count");
const playerScoreCount = document.querySelector(".player-scorecount");
const computerScoreCount = document.querySelector(".computer-scorecount");

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

// Computer Choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Results
function showResultMessage(text, color) {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = text;
    resultMessage.style.color = color;
    resultMessage.classList.add("show");

    setTimeout(() => {
        resultMessage.classList.remove("show");
    }, 600);
}

// Launch rockets on win
function launchRockets() {
  const container = document.getElementById("rocketContainer");

  for (let i = 0; i < 5; i++) {
    const rocket = document.createElement("div");
    rocket.classList.add("rocket");

    const x = Math.random() * window.innerWidth;
    rocket.style.left = `${x}px`;

    const body = document.createElement("div");
    body.classList.add("rocket-body");

    const windowEl = document.createElement("div");
    windowEl.classList.add("rocket-window");

    const leftFin = document.createElement("div");
    leftFin.classList.add("rocket-left-fin");

    const rightFin = document.createElement("div");
    rightFin.classList.add("rocket-right-fin");

    const flame = document.createElement("div");
    flame.classList.add("rocket-flame");

    body.appendChild(windowEl);
    body.appendChild(leftFin);
    body.appendChild(rightFin);
    rocket.appendChild(body);
    rocket.appendChild(flame);
    container.appendChild(rocket);

    setTimeout(() => {
      rocket.remove();
    }, 1500);
  }
}

// Explosions on loss
function showExplosions() {
  const container = document.getElementById("rocketContainer");

  for (let i = 0; i < 10; i++) {
    const explosion = document.createElement("div");
    explosion.classList.add("explosion");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;

    container.appendChild(explosion);

    setTimeout(() => {
      explosion.remove();
    }, 700);
  }
}

// Game logic
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    rounds++;
    roundCount.innerText = `Round ${rounds}`;
    showResultMessage("TIE", "#ffde21");
    return;
  }

  const playerWins =
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper");

  rounds++;

  if (playerWins) {
    playerScore++;
    playerScoreCount.innerText = `Player: ${playerScore}`;
    launchRockets();
    showResultMessage("YOU WIN", "#00ffc3");
  } else {
    computerScore++;
    computerScoreCount.innerText = `Computer: ${computerScore}`;
    showExplosions();
    showResultMessage("YOU LOSE", "#ff4c4c");
  }

  roundCount.innerText = `Round ${rounds}`;
}

// Event listeners
rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));
