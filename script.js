// Computer Choice Logic

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  let choice = "";

  if (computerChoice === 0) {
    choice = "rock";
  } else if (computerChoice === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

console.log("Computer choose:", getComputerChoice());

// Human Choice Logic

function getHumanChoice() {
  let humanChoice = prompt("Pick one!!!, ROCK, PAPER, or SCISSORS ");
  return humanChoice.toLowerCase();
}

console.log("Human choose:", getHumanChoice());

// Global Variable Declarations

let humanScore = 0;
let computerScore = 0;

// Game Logic Single Round

function playRound(humanChoice,computerChoice) {
  
}
