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




// Create 3 IF structures to compare the computer moves with the human moves
//  > IF computerMove - ROCK and humanMove ---- ROCK - draw / PAPER - win + 1 to the human / SCISSOR - lose + 1 to the computer
//  > IF computerMove - PAPER and humanMove ---- ROCK - lose + 1 to the computer  / PAPER - draw / SCISSOR - win + 1 to the human
//  > IF computerMove - SCISSOR and humanMove ---- ROCK - win + 1 to the human / PAPER - lose + 1 to the computer / SCISSOR - draw




let actualHumanChoice;
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

function playRound(x, y) {
    if(actualComputerChoice === 'ROCK' && actualHumanChoice === 'ROCK'){
        console.log('Draw');
    } else if(actualComputerChoice === 'ROCK' && actualHumanChoice === 'PAPER'){
        console.log('You win');
        humanScore++;
    } else if(actualComputerChoice === 'ROCK' && actualHumanChoice === 'SCISSOR'){
        console.log('You lose');
        computerScore++;
    }

    if(actualComputerChoice === 'PAPER' && actualHumanChoice === 'ROCK'){
        console.log('You lose');
        computerScore++;
    } else if(actualComputerChoice === 'PAPER' && actualHumanChoice === 'PAPER'){
        console.log('Draw');
    } else if(actualComputerChoice === 'PAPER' && actualHumanChoice === 'SCISSOR'){
        console.log('You win');
        humanScore++;
    }

    if(actualComputerChoice === 'SCISSOR' && actualHumanChoice === 'ROCK'){
        console.log('You win');
        humanScore++;
    } else if(actualComputerChoice === 'SCISSOR' && actualHumanChoice === 'PAPER'){
        console.log('Draw');
    } else if(actualComputerChoice === 'SCISSOR' && actualHumanChoice === 'SCISSOR'){
        console.log('Draw');
    }


    console.log(humanScore);
    console.log(computerScore);
}

playRound(gethumanchoice(), getcomputerchoice());