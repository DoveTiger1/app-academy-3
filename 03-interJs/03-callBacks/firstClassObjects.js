// First Class Objects 

// Can be assigned to variables 

// Can be passed into arguments 

// Functions can be assigned to variables 
// return values, can be passed into arguments 

// Functions are first class objects 

// Higher order function with function argument 
// taking a function as an argument 
// function foo(arg) { 
//     console.log(arg); 
// }

// function bar() { 
//     return "I'm a function!"; 
// }
// console.log(foo(bar)); 

// function returns a value of a function 
function foo() { 
    let bar = function() { 
        return "I'm a function!"; 
    };
    return bar; 
}
let res = foo(); 
res(); 
