const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

const intHumanResult = document.createElement("p");
intHumanResult.textContent = `Your score: `;
results.appendChild(intHumanResult);
const intCompResult = document.createElement("p");
intCompResult.textContent = `Computer score: `;
results.appendChild(intCompResult);

const hScore = document.createTextNode(humanScore);
const cScore = document.createTextNode(computerScore);
intHumanResult.appendChild(hScore);
intCompResult.appendChild(cScore);

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch (value) {
        case 0:
            computerChoice = "rock";
            return computerChoice;
        case 1:
            computerChoice = "paper";
            return computerChoice;
        case 2:
            computerChoice = "scissors";
            return computerChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    modHC = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        const gameResult = document.createElement("p");
        gameResult.textContent = "Tie! Play again!";
        results.appendChild(gameResult);
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            const gameResult = document.createElement("p");
            gameResult.textContent = "You lose! Paper beats rock.";
            results.appendChild(gameResult);
            ++computerScore;
        } else if (computerChoice == "scissors") {
            const gameResult = document.createElement("p");
            gameResult.textContent = "You win! Rock beats scissors.";
            results.appendChild(gameResult);
            ++humanScore;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            const gameResult = document.createElement("p");
            gameResult.textContent = "You win! Paper beats rock.";
            results.appendChild(gameResult);
            ++humanScore;
        } else if (computerChoice == "scissors") {
            const gameResult = document.createElement("p");
            gameResult.textContent = "You lose! Scissors beats paper.";
            results.appendChild(gameResult);
            ++computerScore;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            const gameResult = document.createElement("p");
            gameResult.textContent = "You lose! Rock beats scissors.";
            results.appendChild(gameResult);
            ++computerScore;
        } else if (computerChoice == "paper") {
            const gameResult = document.createElement("p");
            gameResult.textContent = "You win! Scissors beats paper.";
            results.appendChild(gameResult);
            ++humanScore;
        }
    }
    hScore.nodeValue = humanScore;
    cScore.nodeValue = computerScore;

    if (humanScore == 5 || computerScore == 5) {
        const finalResult = document.createElement("h3");
        if (humanScore >= 5) {
            finalResult.textContent = `And the winner is: the human! Keep playing?`;
        } else {
            finalResult.textContent = `And the winner is: the computer! Try again?`;
        }
        results.appendChild(finalResult);
        humanScore = 0;
        computerScore = 0;
    }
}