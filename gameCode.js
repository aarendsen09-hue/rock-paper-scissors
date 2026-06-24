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

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors, shoot!");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        modHC = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("Tie! Play again!");
        } else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock.");
                ++computerScore;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats scissors.");
                ++humanScore;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats rock.");
                ++humanScore;
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats paper.");
                ++computerScore;
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats scissors.");
                ++computerScore;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper.");
                ++humanScore;
            }
        }
    }
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Round ${i}!`);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

playGame();