// Assigned Value to each Score Variable
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

// Assigned Value to Win, Lose & Tie Variable
const win = "You Win this game!";
const lose = "You Lose this game!";
const tie = "The result is a tie!";

// Declared getComputerChoice Function
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

// Declared playRound Function
function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    tieScore++;
    console.log(`${humanSelection} vs ${computerSelection}`);
    return "It's a tie";
  } else if (humanSelection === "rock") {
    console.log(`${humanSelection} vs ${computerSelection}`);
    if (computerSelection === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      humanScore++;
      return "You Won! Rock beats Scissors";
    }
  } else if (humanSelection === "paper") {
    console.log(`${humanSelection} vs ${computerSelection}`);
    if (computerSelection === "rock") {
      humanScore++;
      return "You Won! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    }
  } else if (humanSelection === "scissors") {
    console.log(`${humanSelection} vs ${computerSelection}`);
    if (computerSelection === "paper") {
      humanScore++;
      return "You Won! Scissors beats Paper";
    }
    if (computerSelection === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }
  } else {
    return "Error! You've to choose one";
  }
}


// Declared Loop
function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    function getHumanChoice() {
      let humanChoice = prompt(
        `Input your choice of "Rock, Paper or Scissors"`
      ).toLowerCase();
      if (
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
      ) {
        return humanChoice;
      } else if (
        humanChoice === undefined ||
        humanChoice === null ||
        humanChoice.trim() === ""
      ) {
        alert(
          `You didn't make a choice! Please choose "Rock", "Paper", or "Scissors".`
        );
        return getHumanChoice(); // Recursively ask for a valid choice
      } else {
        alert(`Invalid choice! Please choose "Rock", "Paper", or "Scissors".`);
        return getHumanChoice(); // Recursively ask for a valid choice
      }
    }

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();

    console.log(playRound(humanSelection, computerSelection));
    console.log(`Human Score (${humanScore}) : Computer Score (${computerScore})`);
  }

  if (humanScore === computerScore) {
    alert(tie.toUpperCase());
  } else if (humanScore > computerScore) {
    alert(win.toUpperCase());
  } else {
    alert(lose.toUpperCase());
  }
  alert("GAME OVER");
  return "";
}
// console.log(game());

function switchAttribute() {
  const gameIconsContainer = document.querySelector(".game-iconsContainer");
  console.log(gameIconsContainer);
  gameIconsContainer.setAttribute("id", "game-iconsContainerAfterStart");
  gameIconsContainer.removeAttribute("class");
}
