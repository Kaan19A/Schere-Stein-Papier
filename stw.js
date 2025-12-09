
let humanScore = 0
let computerScore = 0



function getComputerChoice() {

    let zufall = Math.floor(Math.random() * 3);

    if (zufall == 0) {
        return ("schere");
    }
    else if (zufall == 1) {
        return ("stein");
    }
    else if (zufall == 2) {
        return ("papier");

    }



}
console.log(getComputerChoice());

function getHumanChoice() {
    let eingabe = prompt("Bitte um eingabe");

    if (eingabe == null) {
        return ("du hast auf Abbrechen geklickt");

    }
    return eingabe
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log("Du hast gewählt " + humanChoice);
    console.log("Computer hat gewählt" + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Unentschieden");
        return;
    }
    else if (
        (human === "stein" && computer === "schere") ||
        (human === "papier" && computer === "stein") ||
        (human === "schere" && computer === "papier")
    ) {
        humanScore++
        console.log("Mensch gewinnt Runde");
    }
    else {
        computerScore++
        console.log("Copmuter Gewinnt Runde");

    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}
console.log("Finaler Score: Mensch" + humanScore + " computer" + computerScore);;
