let humanScore = 0;
let computerScore = 0;

let youChoice = document.getElementById('you-choice');
let computerChoice = document.getElementById('computer-choice');
let conclusion = document.getElementById('final');
let youScore = document.getElementById('you-score');
let AIScore = document.getElementById('computer-score');

let hideOrShow = document.getElementById('annouce-winner');

let buttons = document.querySelectorAll('#button');

buttons.forEach((button) => button.addEventListener('click', (e)=>{

        let actualHumanChoice;
        let actualComputerChoice;

        actualHumanChoice = e.target.textContent.toUpperCase();
    
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

        computerChoice.textContent = actualComputerChoice;
        youChoice.textContent = actualHumanChoice
    
    
        if(actualComputerChoice === 'ROCK' && actualHumanChoice === 'ROCK'){
            conclusion.textContent = 'DRAW';
        } else if(actualComputerChoice === 'ROCK' && actualHumanChoice === 'PAPER'){
            conclusion.textContent = 'WIN';
            humanScore++;
        } else if(actualComputerChoice === 'ROCK' && actualHumanChoice === 'SCISSOR'){
            conclusion.textContent = 'LOSE';
            computerScore++;
        }
    
        if(actualComputerChoice === 'PAPER' && actualHumanChoice === 'ROCK'){
            conclusion.textContent = 'LOSE';
            computerScore++;
        } else if(actualComputerChoice === 'PAPER' && actualHumanChoice === 'PAPER'){
            conclusion.textContent = 'DRAW';
        } else if(actualComputerChoice === 'PAPER' && actualHumanChoice === 'SCISSOR'){
            conclusion.textContent = 'WIN';
            humanScore++;
        }
    
        if(actualComputerChoice === 'SCISSOR' && actualHumanChoice === 'ROCK'){
            conclusion.textContent = 'WIN';
            humanScore++;
        } else if(actualComputerChoice === 'SCISSOR' && actualHumanChoice === 'PAPER'){
            conclusion.textContent = 'LOSE';
            computerScore++;
        } else if(actualComputerChoice === 'SCISSOR' && actualHumanChoice === 'SCISSOR'){
            conclusion.textContent = 'DRAW';
        }

        youScore.textContent = humanScore;
        AIScore.textContent = computerScore;

        console.log('Human score: ' + humanScore);
        console.log('Computer score: ' + computerScore)

        if(humanScore === 5 || computerScore === 5){
            hideOrShow.classList.add('show')
            hideOrShow.classList.remove('hide')
            if(humanScore > computerScore){
                hideOrShow.textContent = 'You WON'
            } else {
                hideOrShow.textContent = 'Computer WON'
            }
        }
}
))
