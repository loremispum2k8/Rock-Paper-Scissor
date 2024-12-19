// Add the function getcomputerchoice()
//  > Return randomly ROCK / PAPER / SCISSOR
//      > Use math.random to get a number between 0-1 and store it into a variable - choiceValue;
//      > Multiply math.random to 3 to get a number between 0-3;
//      > Use math.floor() to get a number between 0-2;
//    
//      > Make a variable actualComputerChoice
//      > Make an if statement construction
//          > If choiceValue === 0, actualComputerChoice = ROCK;
//          > Else if choiceValue === 1, actualComputerChoice = PAPER;
//          > Else if choiceValue === 2, actualComputerChoice = SCISSOR;
//  
//      return actulComputerChoice
//  
//  > Console.log the function with the computerChoice returned;


function getcomputerchoice(){
    choiceValue = Math.floor(Math.random()*3);
    let actualComputerChoice;
    switch(choiceValue){
        case 0:
            actualComputerChoice = 'ROCK'
        break;
        case 1:
            actualComputerChoice = 'PAPER'
        break;
        case 2:
            actualComputerChoice = 'SCISSOR'
        break;
    }
    return actualComputerChoice
}


// Add the function gethumanchoice()
//  > Return the human choice ROCK / PAPER / SCISSOR  
//      > Use a prompts "Enter your choice (singural noun)" and store in into a variable - actualhumanchoice + toUpperCase
//      > Make an if statement construction to check for the correct choices
//
//
//
//
//
//
//
//