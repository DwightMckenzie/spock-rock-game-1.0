import { startConfettiInner, stopConfettiInner, removeConfettiInner } from "./confetti.js";

const playerScoreEl =document.getElementById('playerScore');
const playerChoiceEl =document.getElementById('playerChoice');
const computerScoreEl =document.getElementById('computerScore');
const computerChoiceEl =document.getElementById('computerChoice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: {
    name: 'Rock',
    defeats: ['scissors', 'lizard']
  },
  paper: {
    name: 'Paper',
    defeats: ['rock', 'spock']
  },
  scissors: {
    name: 'Scissors',
    defeats: ['paper', 'lizard']
  },
  lizard: {
    name: 'Lizard',
    defeats: ['paper', 'spock']
  },
  spock: {
    name: 'Spock',
    defeats: ['scissors', 'rock']
  },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// remove select from other icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfettiInner();
  removeConfettiInner();
}

// reset score & player/computer Choice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;

  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;

  resultText.textContent = "";

  resetSelected();

}
window.resetAll = resetAll;

// random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  // console.log(computerChoiceNumber);
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// check result increase scores, update results text
function updateScore(playerChoice) {
  // console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } else {
    const choice = choices[playerChoice];
    // console.log(choice.defeats.indexOf(computerChoice));
    
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfettiInner(); // this line was needing corrected
      resultText.textContent = "You Won";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Loose!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    } 
  }
}

// call functions to process
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// add selected styling and computer choice
function displayComputerChoice() {
  // console.log(playerChoice);

  // add selected styling and player choice
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// passing player selection value and styling
function select(playerChoice) {
  checkResult(playerChoice);
  
  console.log(playerChoice);

  // add selected styling and player choice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');  
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');  
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');  
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');  
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');  
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}
window.select = select;

// on load
resetAll();