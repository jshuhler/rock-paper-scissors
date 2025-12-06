# rock-paper-scissors
Making a Rock/Paper/Scissors game in the console while working through [The Odin Project's](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) HTML/CSS/JavaScript Foundations course.

I'm using this README as a scratch pad for myself.

# Plan
## getComputerChoice
- Need to use `Math.random()` to generate a number between 0 and 1. 
    - `Math.floor` is a static method that rounds down and returns the largest integer less than or equal to a given number
    - This idea came from [these](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) [pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    - ~~Use `return Math.floor(Math.random() * roll);`~~
        - Don't do it this way, leave the function taking an undefined variable and then just multiply the math floor/random by the 3 that you were going to pass in the function directly.
    - Logging `(getComputerChoice(3));` makes it roll between 0 and 3, then roll down to the nearest whole number, so it returns either 0, 1, or 2. Use those 3 numbers in the below IF statement.
- Multiply by 100 to get a whole number (?)
- If statement to determine rock, paper, or scissors - figure out how to split up the numbers to get 3 equal rangers to get the number generated
    - IF roll = 0; Rock
    - ELSE roll = 1; Paper
    - ELSE Scissors
## getHumanChoice
- Look at [the 'else if' section of this page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) for ideas on how to handle the input of the human choice.
## playRound
- Need to take humanChoice and computerChoice and compare them
    - Don't want to hardcode all the possibilities, need to figure out how to let the code look if one player played Rock and the other played Scissors, and then assign the point to the player who played Rock. Rather than having something that just is `IF humanChoice === Rock && computerChoice === Scissors, THEN count up humanScore`
    - ~~[switch statements are for this](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)~~ no they're not. they're just for one input, not two like I'm using here.
## playGame
### hint
- When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
- Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
-------------
- the hint is saying that when you use something like `humanChoice = getHumanChoice();` the value of the function `getHumanChoice` is assigned to the variable `humanChoice`. if I were to call that variable again later it just gives me the value assigned to the variable, it doesn't call the function again. 
- so...I need to figure out a way to call the function over and over. in this case, I'd need to call `getHumanCHoice` and `getComputerChoice` a bunch I think?

### Pseudocode
- run one round
- update scores
- keeping updated scores, run another round
- update scores
- keeping updated scores, run another round
- update scores
- keeping updated scores, run another round
- update scores
- keeping updated scores, run another round
- update scores

- https://discord.com/channels/505093832157691914/690590001486102589/1440463997160914974

# UI Updates
- build out the HTML
    - icon images
        - https://thenounproject.com/creator/moniruzzamanbd187/
    - find out hwo to make images buttons?
- style the HTML basics
- start working through updating functions following instructions
    - stuff
    - stuff
    - more stuff
    - don't want it to run 5 rounds, want it to end after one player gets 5 points

## Updating playRound function
- remove the console.log
- move the updating score line up one
- under the updating score, append a change to the divs created above for the scoreboard (the divs aren't being created correctly yet)

## Open Questions
- how to stop the game when one score = 5

## Where I left off
- 12/5: working on updating the playRound function (see above)

## What I need the updated playRound function to do
-X when a button is clicked, it runs the function
-X create the div that will display the results (round by round result [ie - you won, lost, or tied this round], not the running score total)
-X check the button selected (humanChoice) vs the computerChoice that gets run on button click
    - runs through the if statements in playRound
    - update the div created above to reflect the outcome of the round
    - append the update to the div created above to hold theround by round results
-X clear the roundResultsDiv when any button is clicked again

## next steps
- either update playRound or create a new function that kicks when either (humanScore === 5 || computerScore === 5)
    - i wonder if i could do something with a for loop for this.................
- what needs to happen when either score === 5
    - clear everything in `main`, including the rock paper scissors buttons
    - add either a winner or loser message
    - add a button to start a new game
- what needs to happen when new game button is pressed
    - return humanScore and computerScore to 0
    - return the rock paper scissors buttons
    - remove the winner/loser message and the new game button

## style updates to make
- add image to buttons
-correct spacing in `main` - the buttons should be alone in the top 1/3rd of the section, the scoring updates should be in the bottom 2/3rds (?)
- make the scoreboard look nicer