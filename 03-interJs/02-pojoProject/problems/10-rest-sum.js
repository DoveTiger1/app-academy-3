/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0
***********************************************************************/
console.log(restSum(3,5,6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
console.log(restSum(0)); // => 0

// you'll need to change the parameters!
function restSum(num1, ...num) {
  // your code here

  // return num.reduce((accum, value) => accum + value, num1); 

  return num.reduce(function(accum, value) { 
    return accum + value; 
  }, num1); 
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
