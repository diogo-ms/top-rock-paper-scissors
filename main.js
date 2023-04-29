function playRound(playerSelection, computerSelection) {
    let gameOverMessage;
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection == "rock") {
        switch (playerSelection) {
            case "rock":
                gameOverMessage = "It's a Tie !";
                break;
            case "scissors":
                gameOverMessage = "You lost ! The computer wins this round !";
                break;
            case "paper":
                gameOverMessage = "You defeated the computer !";
                break;
        }
    }
    return gameOverMessage;
}
function getComputerChoice() {
    let arrGameItems = ["rock", "paper", "scissors"]; 
    return arrGameItems[(Math.floor(Math.random() * arrGameItems.length))]
}

console.log(playRound("RoCk", getComputerChoice()));

