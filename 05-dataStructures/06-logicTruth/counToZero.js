// Count to Zero 

// Write a function that takes in a number and counts from that number to zero. 
// The number can be positive or negative, integer or non-integer. 
// If it's not an integer, the first count removes the decimal.

/*
countToZero(5.5);
5.5
5
4
3
2
1
0

countToZero(-5);
-5
-4
-3
-2
-1
0
*/

function countTozero(num) { 
    console.log(num); 

    // Base Case: if num is 0 end the recursion 
    if (num === 0) return; 

    // check for non integers 
    // if non integers such as 5.5 
    // decrement = 0.5 
    let decrement = num % 1; 

    // for integers we want to decreement by one 
    if (decrement === 0) { 
        // decrement = -4/4 
        decrement = num / Maths.abs(n); 
    }

    // Recurse 
    // countToZero(-5 - (-1))
    countTozero(num - decrement); 
}
