// Space Complexity 

// The peformance of code in relation to the input size and memory usage
// How much memory of the funciton requires 


// Constant space complexity: O(1)
// identify all the variables and add them up 
// usually variables with primitive types 

function addNums(n) { 
    let total = 0; 

    for (let i = 1; i <= n; i++) { 
        total += i;
    }

    return total; 
}

// variables are total, i 
// does not matter if n is large or small since each integer occupies a constant amount of memory 

// Linear Space Complexity: O(n) 
// usually variables with reference types such as an array 
// as an array require n slots to store n integers 
function getNumList(n) {
    let nums = [];

    for (let i = 0 ; i < n ; i++) {
        nums.push(i);
    }

    return nums;
}

// Quadratic Space Complexity 
// n^2 pairs are pushsed into the pairs array 
// results in a total 2* n^2 + 2 integers stored which reduces 
// to a space complexity of O(n^2)
function getNumPairsList(n) {
    let pairs = [];

    for (let i = 0 ; i < n ; i++) {
        for (let j = 0 ; j < n ; j++) {
            pairs.push([i, j]);
        }
    }

    return pairs;
}
