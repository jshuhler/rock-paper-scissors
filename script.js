// =======BASICS=======
// Rock beats scissors, scissors beat paper, and paper beats rock.

// =======COMPUTER CHOICE=======
function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    let computerChoice = 
        (compNum === 0) ? 'rock' :
        (compNum === 1) ? 'paper' :
        (compNum === 2) ? 'scissors' :
        'Gun';
    return computerChoice; 
}

// =======HUMAN CHOICE=======
// function getHumanChoice () {
//     let userInput = prompt("Rock, Paper, or Scissors?");
//     let humanChoice = userInput.toLowerCase();
//     return humanChoice;
// }

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click',() => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    return playRound;
})

paperBtn.addEventListener('click',() => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    return playRound;
})

scissorsBtn.addEventListener('click',() => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    return playRound;
})

// =======CREATING RESULTS DIV=======
const results = document.createElement("div");
const roundResult = document.createElement("roundResult")
const 

// =======INITIAL SCORING=======
let humanScore = 0;
let computerScore = 0;

//=======PLAYING THE GAME=======
// function playGame() {
//     function playRoundOne() {
//         return playRound();
//     }
//     function playRoundTwo() {
//         return playRound();
//     }
//     function playRoundThree() {
//         return playRound();
//     }
//     function playRoundFour() {
//         return playRound();
//     }
//     function playRoundFive() {
//         return playRound();
//     }

// playRoundOne();
// playRoundTwo();
// playRoundThree();
// playRoundFour();
// playRoundFive();

//PLAYING ONE ROUND
function playRound(humanChoice, computerChoice) {
    // humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    //ROCK OPTIONS
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Rock matches Rock, you tie this round!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats Rock, you lose this round!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors, you win this round!");
        humanScore++;
    //PAPER OPTIONS
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock, you win this round!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Paper matches Paper, you tie this round!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beat Paper, you lose this round!");
        computerScore++;
    //SCISSORS OPTIONS
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats scissors, you lose this round!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beat Paper, you win this round!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Scissors match Scissors, you tie this round!");
}

console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);
}

    if (humanScore > computerScore) {
        console.log(`Congratulations! You've won ${humanScore}-${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`Oh no! You've lost this round ${computerScore}-${humanScore}.`);
    } else if (humanScore === computerScore) {
        console.log(`So close! You've tied this round ${humanScore}-${computerScore}.`)
    }
// }

//=======CONSOLE DEBUGGING AND TESTING=======
console.log("++++SCOREBOARD++++");
// console.log(`Comp: ${getComputerChoice()}`);
// console.log(`Human: ${getHumanChoice()}`);
// console.log(humanScore);
// console.log(computerScore);
console.log(playGame());