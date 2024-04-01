function getComputerChoice() {
    // generate random Number
    // assign this to a choice
    // then return the choice
    let number = Math.floor(Math.random() * 3);
    let choice = (number == 1) ? "Rock" : (number == 2) ? "Scissors" : "Paper";
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // make case insensitive
    // if the same - return Draw 
    // if different, three cases
    // Rock vs. Scissors or Scissors vs. Paper or Paper vs. Rock - you Win
    // Scissors vs. Rock or Paper vs. Scissors or Rock vs. Paper - you Lose
    // for each case - display message
    // then return winner
    let plaSel = playerSelection.toLowerCase();
    let comSel = computerSelection.toLowerCase();
    if (plaSel == comSel) {
        console.log(`You drew! ${plaSel} matches ${comSel}!`);
        return "DRAW";
    }
    else if (
        (plaSel == "rock" && comSel == "scissors") || 
        (plaSel == "scissors" && comSel == "paper") || 
        (plaSel == "paper" && comSel == "rock")) {
        console.log(`You won! ${plaSel} beats ${comSel}!`);
        return "WIN";
    }
    else {
        console.log(`You lost! ${plaSel} loses to ${comSel}!`);
        return "LOSS";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));

function playGame() {
    // init scores
    let plaSco = 0;
    let comSco = 0;
    let round = 5;

    // for each round,
    // prompt user for input
    // playRound
    // change scores
    for (let i = 1; i <= round; i++) {
        let plaCho = prompt("Choose:")
        // error handling if not one of those choices - opt.
        let comCho = getComputerChoice();
        let result = playRound(plaCho, comCho);
        if (result == "WIN") {
            plaSco++;
        } else if (result == "LOSS") {
            comSco++;
        }

        console.log(`The current score is ${plaSco} to ${comSco}!`)
    }
    // declare overall score
    console.log(`The final score is ${plaSco} to ${comSco}!`)
}

playGame();



// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const redP = document.createElement("p");
// const blueH3 = document.createElement("h3");
// const pinkBox = document.createElement("div");
// const pinkH1 = document.createElement("h1");
// const pinkP = document.createElement("p");

// redP.textContent = "Hey I'm red!";
// redP.style.color = "red";

// blueH3.textContent = "I'm a blue h3!";
// blueH3.style.color = "blue";

// pinkBox.setAttribute("style","background-color: pink; border-color: black");
// pinkH1.textContent = "I'm in a div";
// pinkP.textContent = "ME TOO!";

// pinkBox.appendChild(pinkH1);
// pinkBox.appendChild(pinkP);

// container.appendChild(redP,blueH3,pinkBox);
// container.appendChild(blueH3);
// container.appendChild(pinkBox);

// const btn = document.querySelector("#btn");
// // btn.addEventListener("click", alertFunction);

// // function alertFunction() {
// //     alert("YAY! YOU DID IT!");
// //   }
// btn.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.style.background = "blue");
//     alert("YAY! YOU DID IT!");
// });
