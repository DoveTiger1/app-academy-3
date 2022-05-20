// Iterate through Obj

// Write a function printObject(obj) that prints out all key-value pairs 
// of an object. Format should be key - value. 

function printObject(obj) {
    // iterate through the object 
    for (let key in obj) { 
        // use bracket notation as key is a variable 
        let value = obj[key]; 
        console.log(key + " - " + value); 
    }
}

let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
