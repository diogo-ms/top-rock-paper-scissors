let score = 0;
function game() {
    for(let i; i <= 5; i++) {
        const playerSelection = prompt("Choose your item (rock, paper or scissors): ")
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}
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
                score++;
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
                score++;
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
                score++;
                break;
        }
    }
    return gameOverMessage;
}
function getComputerChoice() {
    let arrGameItems = ["rock", "paper", "scissors"]; 
    return arrGameItems[(Math.floor(Math.random() * arrGameItems.length))]
}

// const playerSelection = prompt("Choose your item (rock, paper or scissors): ")
// const computerSelection = getComputerChoice();
game();
console.log("Your score is " + score + "/5");