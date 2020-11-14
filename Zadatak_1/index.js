let userScore = 0;
let computerScore = 0;

// function that generates a random move made by the computer
function getValue() {
    const arr = ["kamen", "škare", "papir"];
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
};

// play the game until someone scores 3 points
while(userScore < 3 && computerScore < 3) {
    // user makes first move
    let p1 = prompt("Tvoj potez! Unesi kamen, škare ili papir.").toLowerCase();

    // check if a given value is valid
    if(p1 !== "kamen" && p1 !== "škare" && p1 !== "papir"){
        p1 = prompt("Nevažeća vrijednost! Unesi kamen, škare ili papir.").toLowerCase();
    }
    
    // store the computer value
    const p2 = getValue();
    
    // compare the values and give a point to the winner
    if(p1 === p2){
        alert(`Izjednačeno!
                Igrač: ${p1}
                Računalo: ${p2}`);
    }
    else if (p1 === "kamen" && p2 === "škare") {
        alert(`Bod za igrača!
                Igrač: ${p1}
                Računalo: ${p2}`);
        userScore++;
    }
    else if (p1 === "kamen" && p2 === "papir") {
        alert(`Bod za računalo!
                Igrač: ${p1}
                Računalo: ${p2}`);
        computerScore++;
    }
    else if (p1 === "papir" && p2 === "kamen") {
        alert(`Bod za igrača!
                Igrač: ${p1}
                Računalo: ${p2}`);
        userScore++;
    }
    else if (p1 === "papir" && p2 === "škare") {
        alert(`Bod za računalo!
                Igrač: ${p1}
                Računalo: ${p2}`);
        computerScore++;
    }
    else if (p1 === "škare" && p2 === "papir") {
        alert(`Bod za igrača!
                Igrač: ${p1}
                Računalo: ${p2}`);
        userScore++;
    }
    else if (p1 === "škare" && p2 === "kamen") {
        alert(`Bod za računalo!
                Igrač: ${p1}
                Računalo: ${p2}`);
        computerScore++;
    };
    
    // display the current score
    console.log(`Igrač: ${userScore} | Računalo: ${computerScore}`);
};

// the final result
userScore > computerScore 
    ? console.log("Pobijedio je igrač!")
    : console.log("Igrač je izgubio od računala");