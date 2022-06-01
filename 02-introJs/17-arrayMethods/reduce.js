// Array Reduce 

let nums = [3, 7, 5, 4]; 

// iterates through the array 
// starts at 0 index and el is the next index
// in this case it would be 1 
let product = nums.reduce(function(accum, el) {
    // return accum + el;
    return accum * el; 
}, // other elements to redcue
); 

// console.log(product); 

// always return a value which is accum 
let max = nums.reduce(function(accum, el) { 
    if (el > accum) { 
        return el; 
    } else { 
        return accum; 
    }
}); 

console.log(max); 
console.log(product); 
