// =======BASICS=======
// Rock beats scissors, scissors beat paper, and paper beats rock.

// =======COMPUTER CHOICE=======
function getComputerChoice(roll) {
    return Math.floor(Math.random() * roll);
    
    if (roll === 0) {
        getComputerChoice = "Rock" 
    }
}

console.log(getComputerChoice(3));