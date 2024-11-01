let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let input = prompt("What's your choice: ")
    return input.toLowerCase()
}

function playRound(humanChoice, computerChoice){
    //human player beats computer
    if (humanChoice == "paper" && computerChoice == "rock" || humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock"){
        humanScore += 1
        alert("You gain a point!")
    }
    //draw
    else if (humanChoice == computerChoice){
        alert("There is a draw!")
    }
    //human player loses
    else{
        alert("You lose this round!")
    }
}
for (let i = 0; i < 5; ++i){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
}

if (humanScore > computerScore){
    alert("You win the game!")
}
else if (humanScore == computerScore){
    alert("There is a draw!")
}
else{
    alert("You lose the game!")
}
