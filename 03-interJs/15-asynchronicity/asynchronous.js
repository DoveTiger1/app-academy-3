// Asynchronous 

// Synchronous means there is inherent order among the commands 

// Asynchronous means there is no guarantee order that commands are executed 

// setTimeout is the minimum amount of time that will elapse before executing the callback 
// cannot be synchronous under any circumstance 

console.log("first"); 

setTimeout(function() { // callback is not invoked immediately 
    console.log("second"); 
}, 0); 

console.log("third"); 

// first 
// third 
// second 

// Used to request data from an external server over a newwork
// server may be being busy handling other requests 

// When we expect a user to interact with our programs
