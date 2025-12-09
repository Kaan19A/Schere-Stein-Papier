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
        return null;   
    }
    return eingabe;
}

console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === null){
        console.log("Spieler hat abgebrochen");
        return
    }
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log("Du hast gewählt " + humanChoice);
    console.log("Computer hat gewählt" + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Unentschieden");
        return;
    
}
    else if (
        (humanChoice === "stein" && computerChoice === "schere") ||
        (humanChoice === "papier" && computerChoice === "stein") ||
        (humanChoice === "schere" && computerChoice === "papier")
    ) {
        humanScore++
        console.log("Mensch gewinnt Runde");
    }
    else if (
        (computerChoice === "stein" && humanChoice === "schere") ||
        (computerChoice === "papier" && humanChoice === "stein") ||
        (computerChoice === "schere" && humanChoice === "papier"))  
       
        {
        computerScore++
        console.log("Copmuter Gewinnt Runde");

    }
}
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

   

console.log("Finaler Score: Mensch" + humanScore + " computer" + computerScore);;
