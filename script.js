const userChoiceDisplay = document.querySelector(".user-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button:not(#reset)");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

const choices = ["Rock", "Paper", "Scissor"];
let playerScore = 0;
let computerScore = 0;

// Reset game
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    userChoiceDisplay.innerHTML = "-";
    computerChoiceDisplay.innerHTML = "-";
    resultDisplay.innerHTML = "Make your move!";
};

resetButton.addEventListener("click", resetGame);

possibleChoices.forEach((choice) =>
    choice.addEventListener("click", (e) => {
        const userChoice = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1).toLowerCase();
        userChoiceDisplay.innerHTML = userChoice;

        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];
        computerChoiceDisplay.innerHTML = computerChoice;

        let result;
        if (userChoice === computerChoice) {
            result = "It's a draw!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissor") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissor" && computerChoice === "Paper")
        ) {
            result = "You Win!";
            playerScore++;
        } else {
            result = "You Lose!";
            computerScore++;
        }

        resultDisplay.innerHTML = result;
        playerScoreDisplay.innerText = playerScore;
        computerScoreDisplay.innerText = computerScore;
    })
);
