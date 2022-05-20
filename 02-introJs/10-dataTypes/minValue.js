// takes in an array of numbers 
// return smallest number of the array 
// if array is empty return null 

function minValue(arr) { 
    // empty array 
    if (arr.length === 0) { 
        return null; 
    }

    // let smallest number be the first number 
    let smallest = arr[0]; 

    for (let i = 0; i < arr.length; i++) { 
        if (smallest > arr[i]) { 
            smallest = arr[i]; 
        }
    }

    return smallest; 
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
