// return a boolean value indicating whether the target is found in the array. 

function myIncludes(arr, target) { 
    for (let i = 0; i < arr.length; i++) { 
        if (target === arr[i]) { 
            return true; 
        }
    }
    return false; 
}

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
