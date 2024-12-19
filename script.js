// Add the function getcomputerchoice()
//  > Return randomly ROCK / PAPER / SCISSOR
//      > Use math.random to get a number between 0-1 and store it into a variable - choiceValue;
//      > Multiply math.random to 3 to get a number between 0-3;
//      > Use math.floor() to get a number between 0-2;
//    
//      > Make a variable actualComputerChoice
//      > Make a SWITCH statement construction
//          > If choiceValue === 0, actualComputerChoice = ROCK;
//          > Else if choiceValue === 1, actualComputerChoice = PAPER;
//          > Else if choiceValue === 2, actualComputerChoice = SCISSOR;
//  
//      return actulComputerChoice
//  
//  > Console.log the function with the computerChoice returned;




// Add the function gethumanchoice()
//  > Return the human choice ROCK / PAPER / SCISSOR  
//      > Use a prompts "Enter your choice (singural noun)" and store in into a variable - actualhumanchoice + toUpperCase
//      > Make an IF statement construction to check for the correct choices
//          > If actualhumanchoice === 'ROCK', actualhumanchoice = 'ROCK';
//          > If actualhumanchoice === 'PAPER', actualhumanchoice = 'PAPER';
//          > If actualhumanchoice === 'SCISSOR', actualhumanchoice = 'SCISSOR';
//
//          > If actualhumanchoice != 'ROCK' && actualhumanchoice != "PAPER" && actualhumanchoice != "SCISSOR", actualhumanchoice = 'ERROR', alert('invalid choice');
// 
//       > Return actulComputerChoice
//  
//  > Console.log the function with the human choice returned
//




// Create the score for the human and computer using variables set to 0






let actualhumanchoice;
let actualComputerChoice;

function getcomputerchoice(){
    choiceValue = Math.floor(Math.random()*3);
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

function gethumanchoice(){
    actualHumanChoice = (prompt('Enter your choice (singural noun)')).toUpperCase();
    
    if (actualHumanChoice !== 'ROCK' && actualHumanChoice !== 'PAPER' && actualHumanChoice !== 'SCISSOR'){
        actualhumanchoice = 'Error';
        alert('Invalid choice')
    }

    return actualHumanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    // your code here!
}

playRound(gethumanchoice(), getcomputerchoice());