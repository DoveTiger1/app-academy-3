// Callbacks and Functions 

// Function Declaration 
let foobar = function(callback)  { 
    console.log("foo"); 
    callback();  // callback evaluates to sayHello
    console.log("bar"); 
}; 

// let sayHello = function() { 
//     console.log("Hello"); 
// }; 

// foobar(sayHello); // function sayHello is passed into the arg 

// Anonymous Callback

foobar(function() { 
    console.log("hello"); 
}); 

// Reuse the function many times 
