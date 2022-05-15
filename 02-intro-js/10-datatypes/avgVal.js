// takes an array as an arg.
// return the average of all values in the array
// if empty return null
 
function avgVal(arr) { 

    if (arr.length === 0) { 
        return null; 
    }
    
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]; 
    }

    return sum / arr.length; 
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
