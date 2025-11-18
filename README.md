# rock-paper-scissors
Making a Rock/Paper/Scissors game in the console while working through [The Odin Project's](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) HTML/CSS/JavaScript Foundations course.

# Plan
## getComputerChoice
- Need to use `Math.random()` to generate a number between 0 and 1. 
    - `Math.floor` is a static method that rounds down and returns the largest integer less than or equal to a given number
    - This idea came from [these](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) [pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    - Use `return Math.floor(Math.random() * roll);`
    - Logging `(getComputerChoice(3));` makes it roll between 0 and 3, then roll down to the nearest whole number, so it returns either 0, 1, or 2. Use those 3 numbers in the below IF statement.
- Multiply by 100 to get a whole number (?)
- If statement to determine rock, paper, or scissors - figure out how to split up the numbers to get 3 equal rangers to get the number generated
    - IF roll = 0; Rock
    - ELSE roll = 1; Paper
    - ELSE Scissors
## getHumanChoice
- Look at [the 'else if' section of this page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) for ideas on how to handle the input of the human choice.