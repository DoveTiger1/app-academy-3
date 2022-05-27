/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(arr) {
  // push nested contents into a new array
  let flattenArr = []; 

  // function to iterate through each element in array 
  arr.forEach((el) => {
    if (Array.isArray(el)) { // check if there is a nested array 
      // [1, [1,2]]
      const result = flatten(el); // => [1, 2]
      result.forEach(el => flattenArr.push(el)); // each element of 1 and 2 pushes to flatten array 
    } else { // element is a num push to new array 
      flattenArr.push(el);
    }
  }); 

  return flattenArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
