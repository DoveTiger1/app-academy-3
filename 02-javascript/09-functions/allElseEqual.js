// takes in array of numbers 
// return element of array that is equal to the half sum of all elements of the array 
// if empty return null

function allElseEqual(arr) { 
    let num = sumArr(arr) / 2; 

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === num) { 
            return num; 
        }
    }
    return null; 
}

function sumArr(arr) { 
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }
    return sum; 
}


console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
