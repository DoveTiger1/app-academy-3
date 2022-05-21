// reverse engineer map

let peeps = ["kafele", "cindy", "jon", "paloma"]; 

// let newPeeps = peeps.map(function(el) { 
//     return el.toUpperCase() + '!'; 
// })

// takes in array and returns a new modified array 

// console.log(newPeeps); 

let myMap = function(array, cb) { 
    let newArr = []; 

    for (let i = 0; i < array.length; i++) { 
        let el = array[i]; 
        let res = cb(el, i, array); 
        newArr.push(res); 
    }

    return newArr; 
}; 

let res = myMap([4, 9, 81, 25], Math.sqrt);

console.log(res); 

// pass into the array, callback function 
let newPeeps = myMap(peeps, function(el) { 
    return el.toUpperCase() + '!'; 
}); 

console.log(newPeeps); 
