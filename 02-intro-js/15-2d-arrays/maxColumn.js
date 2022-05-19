// return an array containing the maximum value in each column 
// array length should be equal to the number of columns 

function maxColumn(matrix) {
    const height = matrix.length; 
    const width = matrix[0].length; 

    let maxColumns = [];
    // iterate through the rows  
    for (let col = 0; col < width; col++) {
        // intialise maxCol 
        let maxCol = matrix[0][col]; 

        // iterate down each row
        for (let row = 1; row < height; row++) { 
            if (maxCol < matrix[row][col]) { 
                maxCol = matrix[row][col]; 
            }
        }
        maxColumns.push(maxCol); 
    }
    return maxColumns; 

} 

matrix = [[ 5,  9, 21], [ 9, 19,  6], [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

// const height = matrix.length; 
//     const width = matrix[0].length; 

//     const maxColumns = []; 
//     for (let col = 0; col < width; col++) { 
//         let colMax = matrix[0][col]; 
//         for (let row = 1; row < height; row++) {
//             if (matrix[row][col] > colMax) { 
//                 colMax = matrix[row][col]; 
//             }
//         }
//         maxColumns.push(colMax); 
//     }
//     return maxColumns; 
// }
