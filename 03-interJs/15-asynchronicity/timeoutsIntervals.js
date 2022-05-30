// Timeouts and Intervals 

// setTimeout(function() { 
//     console.log("food");
// }, 2000); 

function foo() { 
    console.log("print"); 
}

setTimeout(foo, 2000); 

// Arguments 
function boo(food1, food2) { 
    console.log(food1 + " for breakfast"); 
    console.log(food2 + " for lunch"); 
}

setTimeout(boo, 2000, "pancakes", "food"); 

// Canceling 

function soo() {
    console.log("food");
}
  
const val = setTimeout(soo, 2000); // return value is a Timeout object
// cancdel the Timeout object
clearTimeout(val); 

// Running Intervals
function interval(food1, food2) { 
    console.log(food1 + " and " + food2 + "!"); 
}

const stop = setInterval(foo, 1000, "pancakes", "couscous"); 
clearInterval(stop); 
