// Reverse engineer forEach 

let peeps = ['kaefele', 'cindy', 'jon', 'paloma']; 

// peeps.forEach(function(el, i, array) { 
//     console.log(el + ' is at index ' + i); 
//     console.log(array); 
// }); 

let myForEach = function(array, cb) { 
    // iterates through every element in the array 
    for (let i = 0; i< array.length; i++) { 
        // let element be index of the array 
        let el = array[i]; 
        // pass the arguments into the callback function 
        cb(el, i, array); 
    }
}; 

// anonymous callback function 
myForEach(peeps, function(el, i) { 
    console.log(el + ' is at index ' + i); 
    console.log(el.toUpperCase()); 
}); 
