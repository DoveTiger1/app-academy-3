// Guessing Game 

const readline = require("readline"); 

var secretNumber; 
var limitNumber; 

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout
}); 

function randomInRange(min, max) { 
    min = Math.ceil(min); // 15
    max = Math.floor(max); // 20
    // 0.5 * 5 + 15 = floor(17.5) = 17
    return Math.floor(Math.random() * (max - min) + min); 
}

rl.question("Enter a limit number: ", askLimit); 

function askLimit(limit) { 
    console.log(limit); 
    limitNumber = Number(limit);

    rl.question("Enter a max number: ", askRange); 
}

function askRange(maxNum) { 
    console.log(maxNum); 

    rl.question("Enter a min number: "); 
    console.log(minNum); 

    secretNumber = randomInRange(Number(minNum), Number(maxNum)); 

    rl.question("Enter a guess: ", askGuess);
}

function checkGuess(num) { 
    if (num > secretNumber) { 
        console.log("Too high."); 
        return false;
    } else if (num === secretNumber) { 
        console.log("Correct!");
        return true;  
    } else { 
        console.log("Too low."); 
        return false; 
    }
}

function askGuess(guess) { 
    console.log(guess);
    // Number(guess) converts guess string into a number 
    if (checkGuess(Number(guess)) === true || limitNumber === 1) { 
        console.log("You win!"); 
        rl.close(); 
    } else { // not guesssed correctly self reference askGuess
        limit--; 
        rl.question("Enter a guess: ", askGuess);
        askGuess(guess); 
        
    }
}
