// Timing Benchmarks 

function addNums(n) { 
    total = 0; 
    for (let i = 1; i <= n; i++) { 
        total++; 
    }

    return total; 
}

// measures how long an operation takes
console.time("addNums"); // starts the timer 
addNums(100000); // starts the operation 
console.timeEnd("addNums"); // end the timer when operation finishes 

// addNums: 35.635ms

// Date.now
startTime = Date.now(); 
addNums(100000); 
endTime = Date.now(); 

console.log(`Runtime: ${endTime - startTime}`); 

// Visualise Peformance 
let increment = 100000; 

// iterates through 1 million to ten million 
for (let n = increment; n <= 10 * increment; n += increment) { 
    startTime = Date.now();
    addNums(n); 
    endTime = Date.now(); 

    console.log(`${endTime - startTime}`); 
} 
