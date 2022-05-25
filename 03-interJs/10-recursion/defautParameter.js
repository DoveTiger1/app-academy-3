// Default Parameters 

// A parameter given a value 

function growNumber (num, amount = 1) { 
    return num + amount; 
}

growNumber(5); // 6
growNumber(5, 3) // 8

// We can pass in a optional second argument which 
// overwrite the default value
