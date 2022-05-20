// takes in array of numbers and returns the sum of first and last element 
// if there is even number of elements in the array
// If odd number of elements in the array should return the difference between
// first and last elements of the array

function threeIncreasing(arr) { 
    let first = arr[0]; 
    let last = arr[arr.length - 1]; 

    // array length is even return the sum of first and last 
    if (arr.length % 2 === 0) { 
        return first + last; 
    } else { // if not return the difference
        return first - last; 
    }
}; 

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
