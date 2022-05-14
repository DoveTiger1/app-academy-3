// takes in array of numbers 
// returns a new array where every element of the original array is
// multiplied by 2

function doubler(num) { 
    let newNum = []; 
    for (let i = 0; i < num.length; i++) { 
        let double = num[i] * 2
        newNum = newNum.concat(double); 
    }
    return newNum; 
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
