function playRound(playerSelection, computerSelection) {
    let gameOverMessage;
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection == "rock") {
        switch (playerSelection) {
            case "rock":
                gameOverMessage = "It's a Tie !";
                break;
            case "scissors":
                gameOverMessage = "You lose ! The computer wins this round !";
                break;
            case "paper":
                gameOverMessage = "You defeated the computer !";
                break;
        }
    } else if (computerSelection == "paper") {
        switch (playerSelection) {
            case "paper":
                gameOverMessage = "It's a tie !";
                break;
            case "rock":
                gameOverMessage = "You lose ! Paper beats rock !";
                break;
            case "scissors":
                gameOverMessage = "You win ! Scissors wins over paper.";
                break;
        }
    } else if (computerSelection == "scissors") {
        switch (playerSelection) {
            case "scissors":
                gameOverMessage = "It's a tie !";
                break;
            case "paper":
                gameOverMessage = "You lose ! Computer wins !";
                break;
            case "rock":
                gameOverMessage = "You win this round !"
                break;
        }
    }
    return gameOverMessage;
}
function getComputerChoice() {
    let arrGameItems = ["rock", "paper", "scissors"]; 
    return arrGameItems[(Math.floor(Math.random() * arrGameItems.length))]
}

const playerSelection = prompt("Choose your item (rock, paper or scissors): ")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
