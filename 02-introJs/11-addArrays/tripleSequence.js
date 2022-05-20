// The function should return an array representing a sequence that begins 
// with start and is length elements long. 
// In the sequence, every element should be 3 times the previous element. 
// Assume that the length is at least 1.

function tripleSequence(start, length) {
    // your code here
    let arr = [];
    
    let previous = start; 

    for (let i = 0; i < length; i++) { 
        arr.push(previous); 
        previous *= 3; 
    }

    return arr; 
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
