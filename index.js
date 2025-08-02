// Assigned Value to each Score Variable
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;
let humanSelection = null;
let computerSelection = null;
// Assigned Value to Win, Lose & Tie Variable
const win = "You Win this game!";
const lose = "You Lose this game!";
const tie = "The result is a tie!";

const gameIconsContainer = document.querySelector(".game-iconsContainer");
const iconItem = document.querySelectorAll(".icon-item");


// Declared getComputerChoice Function
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

function getHumanChoice() {
  iconItem.forEach(icon => {
    icon.addEventListener('click', () => {
      humanSelection = icon.id.replace('-icon', '');
      console.log(humanSelection);
      return humanSelection;
    });
  });
}

// Declared playRound Function
function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    round++;
    tieScore++;
    console.log(`${humanSelection} vs ${computerSelection}`);
    return "It's a tie";

  } else if (humanSelection === "rock") {
    console.log(`${humanSelection} vs ${computerSelection}`);
    if (computerSelection === "paper") {
      round++;
      computerScore++;
      return "You Lose! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      round++;
      humanScore++;
      return "You Won! Rock beats Scissors";
    }
  } else if (humanSelection === "paper") {
    console.log(`${humanSelection} vs ${computerSelection}`);
    if (computerSelection === "rock") {
      round++;
      humanScore++;
      return "You Won! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      round++;
      computerScore++;
      return "You Lose! Scissors beats Paper";
    }
  } else if (humanSelection === "scissors") {
    console.log(`${humanSelection} vs ${computerSelection}`);
    if (computerSelection === "paper") {
      round++;
      humanScore++;
      return "You Won! Scissors beats Paper";
    }
    if (computerSelection === "rock") {
      round++;
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }
  } else {
    return "Error! You've to choose one";
  }
}
// Declared game Function
// This function will be called when the user clicks the "shoot" button
function game() {

  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));

  console.log(
    `Round ${round}
    Human Score (${humanScore}) : Computer Score (${computerScore})`
  );

  humanSelection = null; // Reset humanSelection for the next round
  computerSelection = null; // Reset computerSelection for the next round
  
  if (humanScore === computerScore) {
    alert(tie.toUpperCase());
  } else if (humanScore > computerScore) {
    alert(win.toUpperCase());
  } else {
    alert(lose.toUpperCase());
  }
  alert("GAME OVER");
  // return;
}

// Function to change the button attribute after clicking "start"
// This function will change the button text to "shoot" and update its ID
let shootButtonAttribute = () => {
  const shootButton = document.querySelector("#start");
  shootButton.innerText = "shoot";
  shootButton.setAttribute("id", "shoot");
  // shootButton.setAttribute("disabled", "disabled");
  // shootButton.removeAttribute("id");
  humanSelection = getHumanChoice();
  shootButton.setAttribute("onclick", "game()");
};

// Function to switch the attribute of the game icons container
// This function will change the ID of the container to "game-iconsContainerAfterStart"
function switchAttribute() {
  gameIconsContainer.setAttribute("id", "game-iconsContainerAfterStart");
  gameIconsContainer.removeAttribute("class");
  shootButtonAttribute();
}
