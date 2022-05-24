// Arrow Functions 

// (parameters, go, here) => { statement1; statement2; return a value; }

// anonymous functions 

let fullNameArrow = (fname, lname) => {
    let str = "Hello " + fname + " " + lname;
    return str;
};

// Single expression arrow functions 

const multiply = function(num1, num2) {
    return num1 * num2;
};
  
// do not need to explicitly state return!
const arrowMultiply = (num1, num2) => num1 * num2;


// Syntatic ambiguity with Arrow functions 
// this will implicitly return an empty object

const ambiguousFunction = () => {}; // returns undefined 

// to make an empty object wrap that object within parenthesis
const clearFunction = () => ({});
clearFunction(); // returns an object: {}
