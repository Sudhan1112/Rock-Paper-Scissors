const userChoiceDisplay = document.querySelector(".P3");
const computerChoiceDisplay = document.querySelector(".P2");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const choices = ["Rock", "Paper", "Scissor"];

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    computerChoiceDisplay.innerHTML = computerChoice;

    let result;
    if (userChoice === computerChoice.toLowerCase()) {
      result = "It's a draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "Scissor") ||
      (userChoice === "paper" && computerChoice === "Rock") ||
      (userChoice === "scissor" && computerChoice === "Paper")
    ) {
      result = "You Win!";
    } else {
      result = "You Lose!";
    }

    resultDisplay.innerHTML = result;
  })
);
