// Call Stack 

// top of the stack is fo 
function foo() { 
    console.log("a"); 
    // top of the stack is now bar
    bar(); 
    // bar pops out of the stack => foo is now at the top of the stack; 
    console.log("b"); 
}

function bar() { 
    console.log("b"); 
    // baz pushes to top of stack 
    baz(); 
    // pops baz out of the stack => bar is now at the top of the stack 
    console.log("e"); 
}

function baz() { 
    console.log("c"); 
}

// print out a b c d e

// 1. the frame on the top of the stack corresponds to the function currently being executed
// 2. calling a function will push a new frame to the top of the stack
// 3. returning from a function will pop the top frame from the stack
