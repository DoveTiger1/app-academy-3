/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// your code here!
let interrupter = (inter) => { 
  // argument sentence passed into the arrow function 
  return (sentence) => { 
    // split the sentence into array that we can iterate through 
    let arr = sentence.split(" "); 

    // return a new array map 
    return arr.map((word, i) => { 
      // check if the index is not the last word 
      if (i !== arr.length - 1) { 
        // return the word with the interruption 
        return word += ` ${inter}`; 
      }
      // return the word by itself if it is the last word index
      return word; 
    }).join(" "); // join the array into a string 
  }; 
}; 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
