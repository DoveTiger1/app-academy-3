/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
console.log(appleCounter(obj3)); // => 3

function appleCounter(appleObj) {
  // your code here

  // returns an array of all the object keys 
  const appleKey = Object.keys(appleObj); 

  // increment counter for how many apples
  let count = 0; 

  // iterate through the array of appleKey
  appleKey.forEach(function(value) { 
    if (value.toLowerCase().includes("apple")) { 
      count++; 
    }
  })

  return count; 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
