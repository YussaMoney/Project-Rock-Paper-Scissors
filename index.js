// Assigned Value to each Variable
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;
let humanSelection = null;
let computerSelection = null;
const win = "You Win this game!";
const lose = "You Lose this game!";
const tie = "The result is a tie!";

const gameIconsContainer = document.querySelector(".game-iconsContainer");
const iconItem = document.querySelectorAll(".icon-item");
const roundDiv = document.querySelector(".round");
const humanScoreHolder = document.querySelector("#playerScore #score"); 
const computerScoreHolder = document.querySelector("#computerScore #score");
const playerChoiceMsg = document.querySelector("#playerChoice");
const computerChoiceMsg = document.querySelector("#computerChoice");
const gameMessageContainer = document.querySelector(".gameMessageContainer");
const gameStatus = document.querySelector(".gameStatus");

// Declared getComputerChoice Function
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

function getHumanChoice() {
  iconItem.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.add("selected");
      humanSelection = icon.id.replace('-icon', '');
      playerChoiceMsg.innerText = `You chose ${humanSelection}`;
      shootButton.disabled = false;
      shootButton.setAttribute("id", "shoot");
      return humanSelection;
    });
  });
}

// Declared playRound Function
function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    round++;
    tieScore++;
    gameMessageContainer.firstElementChild.innerText = `${humanSelection} vs ${computerSelection}`;
    gameMessageContainer.lastElementChild.innerText = "It's a tie";

  } else if (humanSelection === "rock") {
    gameMessageContainer.firstElementChild.innerText = `${humanSelection} vs ${computerSelection}`;
    if (computerSelection === "paper") {
      round++;
      computerScore++;
      gameMessageContainer.lastElementChild.innerText = "You Lose! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      round++;
      humanScore++;
      gameMessageContainer.lastElementChild.innerText = "You Won! Rock beats Scissors";
    }
  } else if (humanSelection === "paper") {
    gameMessageContainer.firstElementChild.innerText = `${humanSelection} vs ${computerSelection}`;
    if (computerSelection === "rock") {
      round++;
      humanScore++;
      gameMessageContainer.lastElementChild.innerText = "You Won! Paper beats Rock";
    }
    if (computerSelection === "scissors") {
      round++;
      computerScore++;
      gameMessageContainer.lastElementChild.innerText = "You Lose! Scissors beats Paper";
    }
  } else if (humanSelection === "scissors") {
    gameMessageContainer.firstElementChild.innerText = `${humanSelection} vs ${computerSelection}`;
    if (computerSelection === "paper") {
      round++;
      humanScore++;
      gameMessageContainer.lastElementChild.innerText = "You Won! Scissors beats Paper";
    }
    if (computerSelection === "rock") {
      round++;
      computerScore++;
      gameMessageContainer.lastElementChild.innerText = "You Lose! Rock beats Scissors";
    }
  } else {
    return "Error! You've to choose one";
  }

}

// Declared game Function
// This function will be called when the user clicks the "shoot" button
function game() {
  computerSelection = getComputerChoice();
  computerChoiceMsg.innerText = `Computer chose ${computerSelection}`
  playRound(humanSelection, computerSelection);
  roundDiv.innerText = `Round ${round}`;
  iconItem.forEach(icon => icon.classList.remove("selected"));

  setTimeout(() => {
    computerChoiceMsg.innerText = playerChoiceMsg.innerText = '';
    gameMessageContainer.style.display = "flex";
    setTimeout(() => {
      gameMessageContainer.style.display = "none";
    }, timeout = 900);
  }, timeout = 950);
  

  humanScoreHolder.innerText = humanScore;
  computerScoreHolder.style.color = humanScoreHolder.style.color = "#00e1ff";
  roundDiv.style.textShadow = computerScoreHolder.style.textShadow = humanScoreHolder.style.textShadow = "0 0 5px #01bdff";
  computerScoreHolder.innerText = computerScore;

  if (round >= 5) {  
    if (humanScore === computerScore) {
      gameStatus.firstElementChild.innerText = tie.toUpperCase();
    } else if (humanScore > computerScore) {
      gameStatus.firstElementChild.innerText = win.toUpperCase();
    } else {
      gameStatus.firstElementChild.innerText = lose.toUpperCase();
    }
    shootButton.disabled = true;
    round = humanScore = computerScore = 0;
    gameStatus.lastElementChild.innerText = "GAME OVER";
    setTimeout(() => {
      gameStatus.style.display = "flex";
    }, 2000);
  }
  shootButton.disabled = true; // Disable the shoot button after the round
  humanSelection = null; // Reset humanSelection for the next round
  computerSelection = null; // Reset computerSelection for the next round
  shootButton.removeAttribute("id");
}

// Function to change the button attribute after clicking "start"
// This function will change the button text to "shoot" and update its ID
const shootButton = document.querySelector("#start");
let shootButtonAttribute = () => {
  shootButton.innerText = "shoot";
  shootButton.removeAttribute("id");
  shootButton.disabled = true;
  humanSelection = getHumanChoice();
  shootButton.setAttribute("onclick", "game()");
};

// Function to switch the attribute of the game icons container
// This function will change the ID of the container to "game-iconsContainerAfterStart"
function switchAttribute() {
  iconItem.forEach(icon => {
    icon.style.cursor = "pointer"
  });
  gameIconsContainer.setAttribute("id", "game-iconsContainerAfterStart");
  gameIconsContainer.removeAttribute("class");
  shootButtonAttribute();
}
