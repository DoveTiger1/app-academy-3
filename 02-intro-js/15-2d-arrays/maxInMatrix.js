// returns largest value in the matrix 
// matrix contains at least one value

function maxInMatrix(matrix) {
    let largest = 0; 
    for (let i = 0; i < matrix.length; i++) { 
        for (let j = 0; j < matrix[i].length; j++) { 
            if (matrix[i][j] > largest) { 
                largest = matrix[i][j]; 
            }
        }
    }
    return largest; 
}
  
  
matrix = [[11,  2,-99], [20, 19, 10], [47, 72, 56]]
  
console.log(maxInMatrix(matrix)); // 72
  