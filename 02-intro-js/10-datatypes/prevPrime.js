// function should return nearest prime numebr that is smaller 
// than the given number 

function prevPrime(num) { 
    if (num <= 2) { 
        return null; 
    }

    for (let i = num - 1; true; i--) { 
        if (isPrime(i)) { 
            return i; 
        }
    }
}

function isPrime(num) { 
    // if num less than 2 
    if (num < 2) { 
        return false; 
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) { 
            return false; 
        }
    }
    return true; 
}


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
