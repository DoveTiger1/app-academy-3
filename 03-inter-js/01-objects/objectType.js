// setting a key to a value 
let car = {}; 

car["color"] = "Blue"; 

car["seats"] = 2; 

console.log(car["color"]); 
// returns Blue
console.log(car["seats"]); 
// returns 2


// check if a key exists => return undefined 

console.log(car["weight"]); 
// returns undefined

// preferred method to check if an object exists in a key 
// is to use the in operator 

console.log("color" in car); 
// returns true
