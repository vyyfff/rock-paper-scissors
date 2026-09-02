"use strict";

let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => {
  const x = Math.random(); // Random number from 0 to 1
  return x < 1 / 3 ? "rock" : x < 2 / 3 ? "paper" : "scissors";
};

const getHumanChoice = () => prompt("Rock, paper or scissors?").toLowerCase();

const capitalizeWord = (x) => x.charAt(0).toUpperCase() + x.slice(1);

const playRound = (computerChoice, humanChoice) => {
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  const s = (x) => (x != "scissors" ? "s" : ""); //Check whether "beat" should end with "s" or not

  if (computerChoice == humanChoice) {
    console.log("It's a tie.");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(
      `You win. ${capitalizeWord(humanChoice)} beat${s(humanChoice)} ${computerChoice}.`,
    );
    humanScore += 1;
  } else {
    console.log(
      `You lose. ${capitalizeWord(computerChoice)} beat${s(computerChoice)} ${humanChoice}.`,
    );
    computerScore += 1;
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore}:${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose! ${humanScore}:${computerScore}`);
  } else {
    console.log(`It's a tie! ${humanScore}:${computerScore}`);
  }
};

playGame();
