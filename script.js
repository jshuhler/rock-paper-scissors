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

// =======HUMAN CHOICE AND PLAYING THE ROUND=======
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
// I moved all of this into the actual playRound fuunction, I think it needs to be in that or it was trying to read a null value for content

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

//=======PLAYING ONE ROUND=======
function playRound(humanChoice, computerChoice) {

    const main = document.querySelector(".main");

    let roundResults = document.createElement("roundResultsDiv");
    roundResults.style.display = 'flex';
    let scoreboard = document.createElement("scoreboard");
    scoreboard.style.display = 'flex';
    
    //ROCK OPTIONS
    if (humanChoice === "rock" && computerChoice === "rock") {
        roundResults.textContent = "Rock matches Rock, you tie this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        roundResults.textContent = "Paper beats Rock, you lose this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        roundResults.textContent = "Rock beats Scissors, you win this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    //PAPER OPTIONS
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        roundResults.textContent = "Paper beats Rock, you win this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        roundResults.textContent = "Paper matches Paper, you tie this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundResults.textContent = "Scissors beat Paper, you lose this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    //SCISSORS OPTIONS
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        roundResults.textContent = "Rock beats Scissors, you lose this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundResults.textContent = "Scissors beat Paper, you win this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        roundResults.textContent = "Scissors match Scissors, you tie this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
}
main.appendChild(scoreboard);
main.appendChild(roundResults);

rockBtn.addEventListener('click', () => {
    roundResults.remove();
    scoreboard.remove();
})

paperBtn.addEventListener('click', () => {
    roundResults.remove();
    scoreboard.remove();
})

scissorsBtn.addEventListener('click', () => {
    roundResults.remove();
    scoreboard.remove();
})

console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);
}

//     if (humanScore > computerScore) {
//         console.log(`Congratulations! You've won ${humanScore}-${computerScore}.`);
//     } else if (humanScore < computerScore) {
//         console.log(`Oh no! You've lost this round ${computerScore}-${humanScore}.`);
//     } else if (humanScore === computerScore) {
//         console.log(`So close! You've tied this round ${humanScore}-${computerScore}.`)
//     }
// // }

//=======CONSOLE DEBUGGING AND TESTING=======
console.log("++++SCOREBOARD++++");
// console.log(`Comp: ${getComputerChoice()}`);
// console.log(`Human: ${getHumanChoice()}`);
// console.log(humanScore);
// console.log(computerScore);
// console.log(playGame());