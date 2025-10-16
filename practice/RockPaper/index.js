const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerDisplay.innerText = `Player: ${playerChoice}`;
    computerDisplay.innerText = `Computer: ${computerChoice}`;
    resultDisplay.classList.remove("greenText", "redText");

    if (playerChoice === computerChoice) {
        resultDisplay.innerText = "Result: It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.innerText = "win!";
        resultDisplay.classList.add("greenText");
        playerScore += 10;
    } else {
        resultDisplay.innerText = "lose!";
        resultDisplay.classList.add("redText");
        computerScore += 10;
    }

    playerScoreDisplay.innerText = `PLAYER SCORE: ${playerScore}`;
    computerScoreDisplay.innerText = `COMPUTER SCORE: ${computerScore}`;
}