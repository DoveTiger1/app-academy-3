function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let numArr = []; 
    for (let i = 1; i < arr.length; i += 2) { 
        numArr = numArr.concat(arr[i]); 
    }
    return numArr; 
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

    // iterate through array and concatenate the odd indices to a new array
    let numArr = []; 
    for (let i = 1; i < arr.length; i += 2) { 
        numArr = numArr.concat(arr[i]); 
    }
    // reverse the new array 
    let numReverse = numArr.reverse(); 
    return numReverse; 
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here

    let numArr = [];
    for (let i = 1; i < arr.length; i *= 2) { 
        numArr = numArr.concat(arr[i]); 
    }

    return numArr; 
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    
    let numArr = []; 
    for (let i = 1; i < arr.length; i *= n) { 
        numArr = numArr.concat(arr[i]); 
    }
    
    return numArr; 
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here

    let newArr = []; 
    // empty arr -> arrlength is 0
    if (arr.length === 0) { 
        return newArr; 
    } 
    // if array has odd number of items, index of middle item 
    let mid = arr.length / 2; 

    // if [1, 2] is even 2/2 = 1
    if (arr.length % 2 == 0) { 
        let even = mid - 1; 
        for (let i = 0; i < even; i++) { 
            newArr = newArr.concat(arr[i]); 
        }
    } else { 
        for (let i = 0; i <= Math.floor(mid); i++) {
            newArr = newArr.concat(arr[i]); 
        }
    }

    return newArr; 
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newArr = []; 
    // empty arr -> arrlength is 0
    if (arr.length === 0) { 
        return newArr; 
    } 
    // if array has odd number of items, index of middle item 
    let mid = arr.length / 2; 

    if (mid % 2 == 0) { 
        for (let i = mid; i < arr.length; i++) { 
            newArr = newArr.concat(arr[i]); 
        }
    } else { 
        for (let i = Math.ceil(mid); i < arr.length; i++) {
            newArr = newArr.concat(arr[i]); 
        }
    }

    return newArr; 

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
