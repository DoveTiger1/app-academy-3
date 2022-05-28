// Unassigned Variables 

var hello; 
console.log(hello) // undefined 

let goodbye; 
console.log(goodbye); // undefined 

const bye; 
console.log(bye); // error 
// Consts cannot be reassigned thus must be assigned during its 
// intial declaration 


// hoisting the variables to the top 

function hoistBuddy() {
    var hello;
    let goodbye; 
    console.log(hello); // prints undefined
    console.log(goodbye); // prints undefined
}
  
hoistBuddy();

function hoistBuddy() {
    console.log(hello); // prints undefined
    var hello;
  
    console.log(goodbye); // ReferenceError: Cannot access 'goodbye' before initialization
    let goodbye;
    // value an error is thrown as line of code attempts to interact with 
    // an undefined variable => only occurs with let and const 
}
  
  hoistBuddy();
