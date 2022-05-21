/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}

function arrayConverter(array) {
  // your code here

  let obj = {}; 
  //            input => if key is in object increment by one 
  //            if not in the object create a new key and intialise it to 1
  array.forEach(key => { 
    key in obj ? obj[key]++ : obj[key] = 1; 
  }); 
  return obj;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
