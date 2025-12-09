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

// =======INITIAL SCORING=======
let humanScore = 0;
let computerScore = 0;

// =======DEFINING & CREATING ELEMENTS=======
const main = document.querySelector(".main");

let roundResults = document.createElement("roundResultsDiv");
roundResults.style.display = 'flex';

let scoreboard = document.createElement("scoreboard");
scoreboard.style.display = 'flex';

let winnerMsg = document.createElement("winnerMsg");
winnerMsg.style.display = 'flex';
winnerMsg.style.textAlign = 'center';

let restartBtn = document.createElement("button");
restartBtn.textContent = "Play Again";

// =======PLAYING A ROUND=======
function playRound(humanChoice, computerChoice) {
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

    if (humanScore === 5 || computerScore === 5) {
        resolveGame();
    } else {
        main.appendChild(scoreboard);
        main.appendChild(roundResults);
    };

    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}

function resolveGame() {

    roundResults.remove();
    scoreboard.remove();
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    if (humanScore === 5) {
        winnerMsg.textContent = "That's 5! Humanity holds out against the looming computer threat!";
    } else if (computerScore === 5) {
        winnerMsg.textContent = "Oh no! The computer got to 5 wins before you did. Looks like humanity's days are numbered.";
    }
    main.appendChild(winnerMsg);
    main.appendChild(restartBtn);
}

function restartGame() {
    
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
// console.log("++++SCOREBOARD++++");
// console.log(`Comp: ${getComputerChoice()}`);
// console.log(`Human: ${getHumanChoice()}`);
// console.log(humanScore);
// console.log(computerScore);
// console.log(playGame());