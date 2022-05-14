// Takes in two arrays and returns the two arrays 
// combined into a single array 

function combineArray(arr1, arr2) { 
    let newArr = []; 
    newArr = newArr.concat(arr1); 
    
    newArr = newArr.concat(arr2); 

    return newArr; 
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
