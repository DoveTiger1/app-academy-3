/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false



function doesKeyExist(obj, key) {
  // your code here
  // must iterate through the object keys 
  // found === key
  for (let found in obj) { 
    if (found === key) { 
      return true; 
    }
  }
  // if not 
  return false; 
}

console.log(doesKeyExist(obj1, 'course')); 
console.log(doesKeyExist(obj1, 'name')); 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
