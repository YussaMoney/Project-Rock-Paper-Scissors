const mySpan = document.getElementsByTagName('span');
console.log(mySpan);

let rock = mySpan[0];
rock.style.color = 'yellow';

let paper = mySpan[1];
paper.style.color = 'blue';

let scissors = mySpan[2];
scissors.getAttribute('class', 'scissors');
scissors.className = 'text-danger';

// Assigned Value to each Score Variable
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;


// Assigned Value to Win, Lose & Tie Variable
const win = 'You Win this game!';
const lose = 'You Lose this game!';
const tie = 'The result is a tie!';

// Assigned computerPlay Function to Variable computerSelection

function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

function getHumanChoice() {
  let humanChoice = prompt(`Input your choice of "Rock, Paper or Scissors"`).toLowerCase();
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else if (humanChoice === undefined || humanChoice === null || humanChoice.trim() === '') {
    alert(`You didn't make a choice! Please choose "Rock", "Paper", or "Scissors".`);
    return getHumanChoice(); // Recursively ask for a valid choice
  } else {
    alert(`Invalid choice! Please choose "Rock", "Paper", or "Scissors".`);
    return getHumanChoice(); // Recursively ask for a valid choice
  }
}

// Assigned Selection Variable
let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

// Declared playRound Function
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        tieScore++;
        console.log(`${humanSelection} vs ${computerSelection}`);
        return "It's a tie";
    } else if (humanSelection === 'rock') {
        console.log(`${humanSelection} vs ${computerSelection}`);
        if (computerSelection === 'paper') { computerScore++; return 'You Lose! Paper beats Rock' }
        if (computerSelection === 'scissors') { humanScore++; return 'You Won! Rock beats Scissors' }

    } else if (humanSelection === 'paper') {
        console.log(`${humanSelection} vs ${computerSelection}`);
        if (computerSelection === 'rock') { humanScore++; return 'You Won! Paper beats Rock' }
        if (computerSelection === 'scissors') { computerScore++; return 'You Lose! Scissors beats Paper' }

    } else if (humanSelection === 'scissors') {
        console.log(`${humanSelection} vs ${computerSelection}`);
        if (computerSelection === 'paper') { humanScore++; return 'You Won! Scissors beats Paper' }
        if (computerSelection === 'rock') { computerScore++; return 'You Lose! Rock beats Scissors' }

    } else {
        return 'Error! You\'ve to choose one';
    }
}

console.log(playRound(humanSelection, computerSelection));
console.log(`Human Score (${humanScore}) : Computer Score (${computerScore})`);

/*// Declared Loop
function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('Input your choice of "Rock, Paper or Scissors"');
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore + ':' + computerScore);
    }

    if (playerScore === computerScore) {
        alert(tie.toUpperCase());
    } else if (playerScore > computerScore) {
        alert(win.toUpperCase());
    } else {
        alert(lose.toUpperCase());
    }
    alert('GAME OVER');
    return ('');
}

console.log(game());

const myParagraph = document.getElementById('p1');
setTimeout(() => {
    console.log(myParagraph);
    myParagraph.setAttribute('class', 'bg-warning');
}, 5000);
*/