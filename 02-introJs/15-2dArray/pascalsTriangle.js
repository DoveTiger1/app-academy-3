
// Pascal's triangle is a 2-dimensional array with the shape of a pyramid. 
// The top of the pyramid is the number 1. To generate further levels of the pyramid, 
// every element is the sum of the element above and to the left with the element above 
// and to the right. Non-existing elements are treated as 0 when calculating the sum.

// Pascals Triangle 
// Write a function pascalsTriangle that accepts a positive number, n, as an argument 
// and returns a 2-dimensional array representing the first n levels of Pascal's triangle. 

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

let pascalsTriangle = function(height) { 
    // intialise a triangle array 
    let triangle = [1]; 

    while (triangle.length < height) { 
        let next = [1]; 
        // previous row 
        let last = triangle[triangle.length - 1]; 

        // iterate through the previous row 
        for (let i = 0; i < last.length - 1; i++) { 
            // [1, sum of the element above and to the left with the leement above and to the right]
            next.push(last[i] + last[i + 1]); 
        }
        // add 1 to the end of the next array 
        next.push(1);
        // push the next array to the end of the pyramid
        triangle.push(next);  
    }
    
    return triangle; 
}; 

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
