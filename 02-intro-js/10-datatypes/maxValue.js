// function takes in array of numbers 
// return largest number of the array 
// if empty return null
 
function maxValue(arr) { 
    if (arr.length === 0) { 
        return null; 
    }

    let max = arr[0]; 

    for (let i = 0; i < arr.length; i++) { 
        if (max < arr[i]) { 
            max = arr[i]; 
        }
    }

    return max; 
    
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
