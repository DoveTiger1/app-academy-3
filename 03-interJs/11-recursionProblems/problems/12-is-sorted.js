/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here

const isSorted = (arr) => { 
  // base case : in ascending order return true
  if (arr.length === 0) { 
    return true; 
  }

  // recursive case 
  // if not in ascending order return false
  // only need to scan two adjacent elements in the array 
  if (arr[0] > arr[1]) { 
    return false; 
  } else { 
    return isSorted(arr.slice(1, arr.length)); 
  }
}; 

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
