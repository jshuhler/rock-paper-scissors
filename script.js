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
let roundCount = 0;

// =======DEFINING & CREATING ELEMENTS=======
const main = document.querySelector(".main");
const body = document.querySelector(".body");

let roundCounter = document.createElement("roundCountDiv");
roundCounter.style.display = 'flex';

let roundResults = document.createElement("roundResultsDiv");
roundResults.style.display = 'flex';

let scoreboard = document.createElement("scoreboard");
scoreboard.style.display = 'flex';

let winnerMsg = document.createElement("winnerMsg");
winnerMsg.style.display = 'flex';
winnerMsg.style.textAlign = 'center';

let restartBtn = document.createElement("button");
restartBtn.textContent = "Play Again";

// =======PLAYING GAME FUNCTIONS=======
function playRound(humanChoice, computerChoice) {
    //ROCK OPTIONS
    if (humanChoice === "rock" && computerChoice === "rock") {
        roundCount++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Rock matches Rock, you tie this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundCount++;
        computerScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Paper beats Rock, you lose this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundCount++;
        humanScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Rock beats Scissors, you win this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    
        //PAPER OPTIONS
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundCount++;
        humanScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Paper beats Rock, you win this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        roundCount++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Paper matches Paper, you tie this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundCount++;
        computerScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Scissors beat Paper, you lose this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    
        //SCISSORS OPTIONS
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundCount++;
        computerScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Rock beats Scissors, you lose this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundCount++;
        humanScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Scissors beat Paper, you win this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        roundCount++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Scissors match Scissors, you tie this round!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    }    

    if (humanScore === 5 || computerScore === 5) {
        resolveGame();
    } else {
        main.appendChild(roundCounter);
        main.appendChild(scoreboard);
        main.appendChild(roundResults);
    };

    // FOR TESTING
    console.log(`roundCount: ${roundCount}`);
    console.log(`humanScore: ${humanScore}`);
    console.log(`computerScore: ${computerScore}`);
    console.log(`--------`);
}

function resolveGame() {
    roundCounter.remove();
    roundResults.remove();
    scoreboard.remove();
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    if (humanScore === 5) {
        winnerMsg.textContent = `Congratulations! You've won ${humanScore}-${computerScore} after ${roundCount} rounds!`;
    } else if (computerScore === 5) {
        winnerMsg.textContent = `Oh no! You've lost ${computerScore}-${humanScore} in ${roundCount} rounds. Better luck next time!`;
    }
    main.appendChild(winnerMsg);
    main.appendChild(restartBtn);
    restartBtn.addEventListener('click', () => {
        restartGame();
    })
}

function restartGame() {
    window.location.reload();
}