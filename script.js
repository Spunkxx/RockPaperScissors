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

// console.log("Computer choose:", getComputerChoice());

// Human Choice Logic

function getHumanChoice() {
  let humanChoice = prompt("Choose between!  ROCK, PAPER, or SCISSORS ");
  return humanChoice.toLowerCase();
}

// console.log("Human choose:", getHumanChoice());

// Global Variable Declarations

let humanScore = 0;
let computerScore = 0;
// let rounds = 5;

// Game Logic Single Round

function playRound(humanChoice, computerChoice) {
  // console.log(`You chose: ${humanChoice}`);
  // console.log(`The computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`It's a Tie! You Both chose:  ${humanChoice}.`);
    humanScore++;
    computerScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  // const humanSelection = getHumanChoice();
  // const computerSelection = getComputerChoice();

  // playRound(humanSelection, computerSelection);
}

// GamePlay function
function playGame() {
  const totalRounds = 5;
  let currentRound = 1;

  console.log(`--- Starting a new game of ${totalRounds} rounds! ---`);

  while (currentRound <= totalRounds) {
    console.log(`Round ${currentRound}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`SCORE -> You: ${humanScore} | Computer: ${computerScore}`);

    currentRound++;
  }

  console.log("\n--- GAME OVER ---");
  console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the series!");
  } else if (computerScore > humanScore) {
    console.log("You lost the series. Better luck next time!");
  } else {
    console.log("The series is a tie!");
  }
}

playGame();
