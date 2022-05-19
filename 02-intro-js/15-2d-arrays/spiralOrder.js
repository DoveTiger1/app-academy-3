// Spiral Order 

// takes in a 2d array (matrix) 
// returns an array containing the elements in spiral order. 

function spiralOrder(matrix) { 
    let spiral = []; 
    let height = matrix.length; 
    let width = matrix[0].length; 
    
    let row = 0; 
    let col = 0; 
    while (row < width && col < height) { 
        // push top row 
        for (let i = col; i < width; i++) { 
            spiral.push(matrix[row][i]); 
        }
        // row now starts at the next row since the top row is already pushed
        row++; 

        // push the rhs column 
        for (let i = row; i < height; i++) { 
            spiral.push(matrix[i][width - 1]); 
        }
        // width of the matrix is reduced by one 
        width--;         

        // push the bottom row 
        if (row < height) { 
            for (let i = width - 1; i >= col; i--) { 
                spiral.push(matrix[height - 1][i]); 
            }
            // height of the matrix is reduced by one 
            height--; 
        }

        // push the lhs column 
        if (col < width) { 
            for (let i = height - 1; i >= row; i--) { 
                spiral.push(matrix[i][col]); 
            }
            col++; 
        }   
    }
    return spiral; 
}
  
matrix = [[ 1, 2, 3],
        [ 4, 5, 6],
        [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
