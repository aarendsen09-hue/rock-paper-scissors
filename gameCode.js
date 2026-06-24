function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch (value) {
        case 0:
            console.log("rock");
            break;
        case 1:
            console.log("paper");
            break;
        case 2:
            console.log("scissors");
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors, shoot!");
    return choice;
}

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

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);