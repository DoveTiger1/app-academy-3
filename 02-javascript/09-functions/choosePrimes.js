// return an array of the chosen primes 

function choosePrimes(arr) { 
    let primes = []; 
    
    // iterate through the array 
    // condition if isPrime
    for (let i = 0; i < arr.length; i++) { 
        let num = arr[i]; 

        if (isPrime(num)) { 
            primes.push(num); 
        }
    }
    return primes; 
}

let isPrime = function(num) { 
    // if num is 1 or less return false 
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

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
