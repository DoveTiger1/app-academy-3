// Lucky Numbers 
// returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.

function luckyNumbers(matrix) {
    let minArr = []; 

    const width = matrix[0].length; 
    const height = matrix.length; 

    // locate the minimum element in each row 
    for (let row = 0; row < height; row++) { 
        let min = matrix[row][0]; 
        let locateCol = 0; 
        for (let col = 0; col < width; col++) { 
            if (min > matrix[row][col]) { 
                min = matrix[row][col];
                
                locateCol = col; 
            }
        }
        // check if it the max in the given column 
        if (maxColumn(matrix, min, locateCol) === true) { 
            minArr.push(min); 
        }
    }    
    return minArr; 
}

function maxColumn(matrix, min, locateCol) { 
    const height = matrix.length;
    
    for (let row = 0; row < height; row++) { 
        if (min < matrix[row][locateCol]) { 
            return false; 
        }
    }
    return true; 
}

// function luckyNumbers(matrix) {
//     // your code here...
//     const lucky = matrix.map(arr => min(arr));
//     return [max(lucky)];
// }

// // get minimum
// const min = arr => Math.min(...arr);

// // get maximum
// const max = arr => Math.max(...arr);

matrix = [[ 5,  9, 21],
        [ 9, 19,  6],
        [12, 14, 15]]; 

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6], 
        [10,  2,  7,  9], 
        [21, 15, 19, 10]]; 

console.log(luckyNumbers(matrix)); // [10]
