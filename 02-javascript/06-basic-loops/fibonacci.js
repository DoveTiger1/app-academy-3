// The fibonacci sequence is a sequence of numbers whose first and second elements are 1. 
// To generate further elements of the sequence we take the sum of the previous two elements. 
// For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. 
// Write a function fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.

function fibonacci(length) {
    // empty arr case 
    // single length arr case 
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [1];
    }

    let seq = [1,1];

    while (seq.length < length) {
        // takes previous number 
        let last = seq[seq.length - 1];
        // takes second previous number 
        let secondToLast = seq[seq.length - 2];
        // adds the two previous numbers
        let nextEle = last + secondToLast;
        seq.push(nextEle);
    }

    return seq;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
