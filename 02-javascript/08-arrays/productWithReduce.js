// takes in array of numbers 
// retur total product of multiplying all numbers of the array together 

function productWithReduce(arr) { 
    let product = 1; 

    // if array is empty
    if (arr.length === 0) { 
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]; 
    }
    return product; 
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
