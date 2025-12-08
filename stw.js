
function getComputerchoice() {

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
console.log(getComputerchoice());

function getHumanChoice() {
     let eingabe = prompt("Bitte um eingabe");
     
     if(eingabe == null) {
        return("du hast auf Abbrechen geklickt");
        
     }
     return eingabe 
}

console.log(getHumanChoice());
