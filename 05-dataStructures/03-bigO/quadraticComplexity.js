// Quadratic Growth 

// Nested loops are O(n^2) 


function printPairSums(n) {

    for (let i = 0 ; i < n ; i++) { // First for loop runs n times 
  
      for (let j = 0 ; j < n ; j++) { // Second for loop run n times 
        console.log(`${i} + ${j} = ${i + j}`);
      }
  
    }
}

// Overall time complexity is n*n or O(n^2)

// Constant Loops are O(n) 

// Adjacent Loops are O(n+n) = O(n)
