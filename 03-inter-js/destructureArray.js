let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [fruit1, num1, num2, num3, obj, fruit2] = bigArray; 

console.log(obj.name); 

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
