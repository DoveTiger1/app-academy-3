// Dynamic Arrays 

function addToBack(n) { // O(n) operation 
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1); // each value must be copied from the old memory to the new allocation 
        // O(1)
    }  
    return arr; 
}

function addToFrontPreAllocated(n) { // O(n) 
    // Preallocate n slots of memory in an array 
    const arr = new Array(n); 
    for (let i = 0; i < n; i ++) { 
        arr[i] = i + 1; // writing over the empty slots which is O(1)
    }
    
    return arr; 
}

// Compare the peformance of both functions  

n = 10000000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimePre = Date.now();
arr = addToFrontPreallocated(n);
endTimePre = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFrontPreallocated(" + n + ") = " + (endTimePre - startTimePre) + "ms");

// addToBack(10000000) = 292ms
// addToFrontPreallocated(10000000) = 82ms

// unshift() and shift()
// Need to shift all of the array to the right by 1
// then add the new value to the front.

/* 
[255, 256, 43690, 1431655765, 1, <empty>, <empty>, <empty>]    // Start
[255, 256, 43690, 1431655765, 1, 1, <empty>, <empty>]          // Shift 1
[255, 256, 43690, 1431655765, 1431655765, 1, <empty>, <empty>] // Shift 1431655765
[255, 256, 43690, 43690, 1431655765, 1, <empty>, <empty>]      // Shift 43690
[255, 256, 256, 43690, 1431655765, 1, <empty>, <empty>]        // Shift 256
[255, 255, 256, 43690, 1431655765, 1, <empty>, <empty>]        // Shift 255
[0, 255, 256, 43690, 1431655765, 1, <empty>, <empty>]          // Overwrite first element to 0
*/

// This requires 5 shifting steps for the array length 5, or n steps for an array length n 
// Complexity: O(n)

// Same applies for shift() which renoves the first value and moves each other 
// value to the left by one 

// Splice => adding or remove values to an array 
// Complexity: O(n) 
// splice(index, steps, [...elements to insert]); 

function addToFront(n) { // O(n^2)
    const arr = []; 
    for (let i = 0; i < n; i++) { 
        arr.unshift(n - i); // O(n)
    }
    return arr; 
}

n = 50000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms");

// addToBack(50000) = 4ms
// addToFront(50000) = 194ms

// addToFront() is almost 50x slower than addToBack() 

n = 100000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms");

// addToBack(100000) = 5ms
// addToFront(100000) = 895ms

// correlates to the time complexity of O(n^2)
