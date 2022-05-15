// function that takes a location either "FRONT" or "BACK"
// adds an element to either front or back of the given array 
// if location is anything besides "FRONT" or "BACK" print an error

function addToArray(location, element, arr) {
    // Your code here
    if (location === "FRONT") { 
        arr.unshift(element); 
    } else if (location === "BACK") { 
        arr.push(element); 
    } 
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
