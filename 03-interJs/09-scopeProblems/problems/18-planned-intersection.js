/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

// your code here
let plannedIntersect = (arr1) => { 
  let newArr = []; 
  return (arr2) => { 
    // iterate each character in array 1
    arr1.forEach((char1) => { 
      // iterate through each character in array 2
      arr2.forEach((char2) => { 
        // check if character 1 and character 2 match
        if (char1 === char2) { 
          // push to the new array 
          newArr.push(char1); 
        };
      }); 
    }); 
    
    return newArr; 
  }; 
}; 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
