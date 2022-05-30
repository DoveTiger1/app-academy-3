// Event Loop 

// Call Stack Component 
// Keeps track of the current "task" in porgress

// Message Queue Component 
// Keeps track of the tasks that cannot be executed at this moment
// Will be executed once the current task is finished 

function somethingSlow() {
    // some terribly slow implementation
    // assume that this function takes 4000 milliseconds to return
  }
  
function foo() {
    console.log("food");
}
  
function bar() {
    console.log("bark");
    baz();
}
  
function baz() {
    console.log("bazaar");
}
  
setTimeout(foo, 1500);
setTimeout(bar, 1000);  
somethingSlow();
