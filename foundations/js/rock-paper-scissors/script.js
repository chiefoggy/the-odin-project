const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const resultDiv = document.querySelector('.result')
const winnerDiv = document.querySelector('.winner')
const humanScoreSpan = document.querySelector('.human-score')
const computerScoreSpan = document.querySelector('.computer-score')

let humanScore = 0
let computerScore = 0
let gameEnded = false

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice){
    const displayText = document.createElement('p')
    resultDiv.innerHTML = ''

    //human player beats computer
    if (humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore += 1
        displayText.innerText = `You gain a point! ${humanChoice} beats ${computerChoice}`
    }
    //draw
    else if (humanChoice == computerChoice){
        displayText.innerText = `There is a draw! You both picked ${humanChoice}`
    }
    //human player loses
    else{
        computerScore += 1
        displayText.innerText = `You lose this round! ${computerChoice} beats ${humanChoice}`
    }
    resultDiv.append(displayText)
}

//game ends when either computer or player first gets to 5 points
function checkForWinner(humanScore, computerScore){
    const winnerDeclaration = document.createElement('h2')
    if (humanScore === 5){
        winnerDeclaration.classList.add('player-won')
        winnerDeclaration.innerText = `You won ${humanScore} to ${computerScore}, congrats on beating the computer!`
        gameEnded = true
        disableButtons()
    }
    else if (computerScore === 5){
        winnerDeclaration.innerText = `You lost ${humanScore} to ${computerScore}, better luck next time!`
        gameEnded = true
        disableButtons()
    }
    winnerDiv.append(winnerDeclaration)
} 

function updateScore(humanScore, computerScore){
    humanScoreSpan.innerText = `Your score: ${humanScore} `
    computerScoreSpan.innerText = `Computer's score: ${computerScore}`
}

function disableButtons(){
    rockButton.disabled = true
    paperButton.disabled = true
    scissorsButton.disabled = true
}

rockButton.addEventListener('click', () => {
    if (!gameEnded){
        const humanChoice = 'Rock'
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        checkForWinner(humanScore, computerScore)
        updateScore(humanScore, computerScore)
    }
})

paperButton.addEventListener('click', () => {
    if (!gameEnded){
        const humanChoice = 'Paper'
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        checkForWinner(humanScore, computerScore)
        updateScore(humanScore, computerScore)
    }
})

scissorsButton.addEventListener('click', () => {
    if (!gameEnded){
        const humanChoice = 'Scissors'
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        checkForWinner(humanScore, computerScore)
        updateScore(humanScore, computerScore)
    }
})