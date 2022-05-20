// two matrices are guaranteed to have the same "height" and "width" 
// return a new matrix representing the sum of the two arguments 
// add matrices, add the values at the same position 

function matrixAddition(matrix1, matrix2) { 
    let sum = []; 

    for (let row = 0; row < matrix1.length; row++) { 
        let pairs = []; 
        for (let col = 0; col < matrix1[row].length; col++) { 
            let sum = matrix1[row][col] + matrix2[row][col]; 
            pairs.push(sum); 
        }
        sum.push(pairs);  
    }

    return sum; 
}

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
