// =======================================================
//  1. DOM ELEMENT REFERENCES
// =======================================================

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playAgainBtn = document.querySelector("#play-again"); // Find the new button

const resultPara = document.querySelector("#result p"); 
const scorePara = document.querySelector("#score p");


// =======================================================
//  2. GAME STATE VARIABLES
// =======================================================

let humanScore = 0;
let computerScore = 0;
const winningScore = 5;


// =======================================================
//  3. EVENT LISTENERS
// =======================================================

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
playAgainBtn.addEventListener("click", resetGame); // Add listener for the new button


// =======================================================
//  4. CORE GAME FUNCTIONS
// =======================================================

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultPara.textContent = `It's a Tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultPara.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultPara.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }

  scorePara.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
  checkForWinner();
}

function checkForWinner() {
  if (humanScore === winningScore || computerScore === winningScore) {
    if (humanScore === winningScore) {
      resultPara.textContent = `You are the champion!`;
    } else {
      resultPara.textContent = `GAME OVER! The computer wins this time.`;
    }
    endGame();
  }
}

// NEW FUNCTION: To reset the game to its initial state
function resetGame() {
  // Reset scores
  humanScore = 0;
  computerScore = 0;

  // Reset display text
  resultPara.textContent = "Click a button to start the game!";
  scorePara.textContent = "You: 0 | Computer: 0";

  // Re-enable the choice buttons
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  // Hide the "Play Again" button
  playAgainBtn.classList.add("hidden");
}

// UPDATED FUNCTION: Now also shows the "Play Again" button
function endGame() {
  // Disable the choice buttons
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  // Show the "Play Again" button by removing the .hidden class
  playAgainBtn.classList.remove("hidden");
}
