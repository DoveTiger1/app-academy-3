// Mulitply Recursion

function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;
    // no need for 
    // if (num2 == 1) return 1; 

    if (num2 > 0) {
        return num1 + multiply(num1, num2 - 1);
    } else {
        return -num1 + multiply(num1, num2 + 1);
    }
}
multiply(5, -3);   // -15

// Assume recursion function works 
function alternateMultiply(num1, num2) {
    return num1 * num2;
}
alternateMultiply(5, 3); // 15

function multiply(num1, num2) {
    // base case
    if (num2 == 0) return 0;

    if (num2 > 0) {
        return num1 + alternateMultiply(num1, num2 - 1);
    } else {
        return -num1 + alternateMultiply(num1, num2 + 1);
    }
}

console.log(multiply(4, 6)) ;  // 24
multiply(4, -6)  // -24
