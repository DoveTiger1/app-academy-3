// return nearest prime number that is greater than the given number 

let nextPrime = function(num) { 
   let i = num; 

   while (true) { 
        i++; 

        // if prime pass into the condition 
        // if false repeats the loop

        if (isPrime(i)) { 
            return i; 
        }
   }
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

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
