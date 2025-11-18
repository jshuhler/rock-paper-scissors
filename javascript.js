// =======BASICS=======
// Rock beats scissors, scissors beat paper, and paper beats rock.

// =======COMPUTER CHOICE=======
function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    let compResult = 
        (compNum === 0) ? 'Rock' :
        (compNum === 1) ? 'Paper' :
        (compNum === 2) ? 'Scissors' :
        'Gun';

    return compResult; 
}

function getHumanChoice () {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//=======CONSOLE DEBUGGING AND TESTING=======
// console.log(`DEBUGGING: ${getComputerChoice()}`);
// console.log(`DEBUGGING: ${getHumanChoice()}`);
// console.log(humanScore);