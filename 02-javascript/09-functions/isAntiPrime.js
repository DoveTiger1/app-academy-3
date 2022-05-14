// accepts number as an argument 
// return true if given number has more divisors than all the 
// positive numebrs than the given number

let isAntiPrime = function(num) { 
    let factors = numFactors(num); 

    for (let i = 0; i < num; i++) { 
        if (factors < numFactors(i)) { 
            return false; 
        }
    }
    return true; 
}

let numFactors = function(num) { 
    let count = 0; 

    for (let i = 0; i < num; i++) { 
        if (num % i === 0) { 
            count++; 
        }
    }
    return count; 
}

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
