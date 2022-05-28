// Immediately Invoked Function Expression 

// keeps functions and variables private
// outer scsope cannot access the function or variables inside 
// the function scope 


// runs immediately 

(function() { 
    const firstName = "ze";
    console.log(firstName); 
})(); // prints ze 

// we still cannot reference the fristName variable from this outer scope
// and now we have no hope of ever running the above function above again
console.log(firstName);
