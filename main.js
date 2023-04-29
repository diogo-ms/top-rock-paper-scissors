function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    return playerSelection;
}
function getComputerChoice() {
    let arrGameItems = ["rock", "paper", "scissors"]; 
    return arrGameItems[(Math.floor(Math.random() * arrGameItems.length))]
}

console.log(playRound("RoCk", getComputerChoice()));

