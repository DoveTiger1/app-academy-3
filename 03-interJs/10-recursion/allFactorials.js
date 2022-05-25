// Factorials Arrays

// n * (n-1)

function allFactorials(num, factorials = [1]) { 
    // 5 > 1
    if (num > factorials.length) { 
        // recursive 4, [1] until num = 1, factorials = [1]
        factorials = allFactorials(num - 1, factorials); 
        console.log(factorials); 
    }
    
    // push 1 * 1 to the array 
    factorials.push(num * factorials[num - 1]); 
    // pops it out of the stack 
    
    return factorials; 
}


console.log(allFactorials(5));
// [ 1, 1, 2, 6, 24, 120 ]
