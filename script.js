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
restartBtn.style.padding = '8px 16px';
restartBtn.style.fontSize = '16px';

// =======PLAYING GAME FUNCTIONS=======
function playRound(humanChoice, computerChoice) {
    //ROCK OPTIONS
    if (humanChoice === "rock" && computerChoice === "rock") {
        roundCount++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Both Rocks crack into each other. You tie this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundCount++;
        computerScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "The Computer's Paper smothers your Rock. You lose this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundCount++;
        humanScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Your Rock smashes the Computer's Scissors. You win this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    
    //PAPER OPTIONS
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundCount++;
        humanScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Your Paper smothers the Computer's Rock. You win this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        roundCount++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Both pieces of Paper just kind of lay there. You tie this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundCount++;
        computerScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "The Computer's Scissors shred your Paper. You lose this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    
    //SCISSORS OPTIONS
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundCount++;
        computerScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "The Computer's Rock smashes your Scissors. You lose this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundCount++;
        humanScore++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Your Scissors shred the Computer's Paper. You win this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        roundCount++;
        roundCounter.textContent = `Round: ${roundCount}`;
        roundResults.textContent = "Sparks fly as both Scissors clash. You tie this round!";
        scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    }    

    //CHECKING FOR A WINNER
    if (humanScore === 5 || computerScore === 5) {
        resolveGame();
    } else {
        main.appendChild(roundCounter);
        main.appendChild(scoreboard);
        main.appendChild(roundResults);
    };

    //FOR TESTING PURPOSES
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
        winnerMsg.textContent = `Oh no! You've lost ${computerScore}-${humanScore} after ${roundCount} rounds. Better luck next time!`;
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