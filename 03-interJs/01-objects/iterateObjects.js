// current key is assigned to variable on each iteration 

// for (let variable in object) { 
//     statement;
// }
let obj = { 
    name: "Rose", 
    cats: 2 
};

// The key we are accessing is assigned to the `currentKey`
// *variable* on each iteration.
for (let currentKey in obj) { 
    console.log(currentKey); 
}

// prints out : 
// name 
// cats 

for (let key in obj) { 
    let value = obj[key]; 
    console.log(value); 
}

let dog = { 
    name: "Fido"
}; 

dog.bark = function() { 
    console.log("Bark Bark"); 
}

dog["speak"] = function(string) { 
    console.log("WOOF " + string + " WOOF!!!"); 
}

dog.bark(); 
dog.speak("bark"); 

// Object.keys 
// returns the array of the keys of a given object 

// Object.values 
// return sthe arrays of the values of a given object

// Object.entries 
// returns a 2darray of the keys and the value of a given object

let cat = { 
    name: "Freyja", 
    color: "orange"
}

console.log(Object.entries(cat));

// [ [ 'name', 'Freyja' ], [ 'color', 'orange' ] ]
