// =======BASICS=======
// Rock beats scissors, scissors beat paper, and paper beats rock.

// =======COMPUTER CHOICE=======
function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    return compNum;

    
    
    // if (compNum === 0) {
    //      let getComputerChoice = "Rock";
    // } else if (compNum === 1) { 
    //     getComputerChoice = "Paper";
    // } else if (compNum === 2) {
    //     getComputerChoice = "Scissors";
    // } else {
    //     compNum = "";
    // }
    }

console.log(getComputerChoice());