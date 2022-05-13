// Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. 
// The functions should return the smallest number that is divisible by both num1 and num2.

// has to be a for loop until there is one common multiple found 
// meaning i is divisible by both num1 and num2
// i <= num1 * num 2 = is largest common multiple 
function leastCommonMultiple(num1, num2) { 
    for (let i = 1; i <= (num1 * num2); i++) { 
        if (i % mum1 === 0 && i % num2 === 0) { 
            return i; 
        }
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
