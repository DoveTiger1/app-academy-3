// Closures 

// combination of a function and the lexical environment within
// which that function was declared

// innter function that uses / changes variables in the outer function 

// lexical envrionment includes 
// block scope, function scope, global scope 

function climbTree(treeType) { 
    let treeString = "You climbed a "; 

    function sayClimbTree() { 
        // keeps referene to all the variables when it was defined 
        // even if the outer function has returned 
        return treeString + treeType; 
    }

    return sayClimbTree(); 
}

console.log(climbTree("Pine")); 

// Private state 
// declaring a function as exclusively private 

function createCounter() { 
    let count = 0; 

    return function() { 
        count++; 
        return count; 
    }
}

let counter = createCounter(); // => returns the [function : count++]
console.log(counter()); // => 1
console.log(counter()); // => 2

//we cannot reach the count variable!
counter.count; // undefined
let counter2 = createCounter();
console.log(counter2()); // => 1

// Passing arguments implicitly 
// we can use closures to pass down arguments to helper functions 
// without explicitly passing them into that helper function 
function isPalindrome(string) {
    function reverse() {
      return string
        .split("")
        .reverse()
        .join("");
    }
  
    return string === reverse();
}

// Closures close over variables of a returned function 

function treeMaker() { 
    let trees = []; 

    function addTree(tree) { 
        trees.push(tree); 

        return trees; 
    }

    return addTree; 
}

const treeFunc = treeMaker(); 

console.log(treeFunc("Pine")); // [ "Pine" ]
