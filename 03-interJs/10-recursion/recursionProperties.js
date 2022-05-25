// Recursion Properties 

// 1. function calls itself (recursive step) 
// 2. function has an end state (base case)
// 3. function move closer to the base case with each call 

// Recursively 
function printArray(arr, i = 0) {

    // Base Case: index has reached the end of the array
    if (i >= arr.length) return;

    // Print the value
    console.log(arr[i]);

    // Call the function recursively,
    // moving the index one step closer to the base case.
    printArray(arr, i+1);
}

// Iteratively 
function printArrayIterative(arr) {

    for (let i = 0 ; i < arr.length ; i++) {
        console.log(arr[i]);
    }

}
