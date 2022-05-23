// Variables Scopes

// let: any variables declared with the keyword let allows you to reassign that variable. 
// Variable declared using let is scoped within a block.

// const: any variables declared with the keyword const will not allow you to reassign that variable. 
// Variable declared using const is scoped within a block.

// var: A var declared variable may or may not be reassigned, and the variable is scoped to a function.

// Var : Function-scope variables 
// variables will be declared at the top 
// all var keywords will have an intial value of undefined 




// let and const: block-scoped variables 

// let 
// can be reassigned however cannot be redeclared

// const 
// cannot be reassigned 
// throws an error if reassign const variables 

// constants that are reference types : mutuable such as objects 

const animals = {}; 

animals.big = "beluga whale"; // works 

animals = { big : "beluga whale" };  // will errore becuase of the reassignment 


// Temporal Dead zone. 
// variables declared using let and const are not intialised until their definitions 
// are evaluated => get an error if you reference a let or const declared variable
// before it is evaluated 

if (true) {
    console.log(str); // => Uncaught ReferenceError: Cannot access 'str' before initialization
    const str = "apple";
}
