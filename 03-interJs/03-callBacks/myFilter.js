// myFilter Reverse Engineering 

let veggies = ['lettuce', 'celery', 'cabbage', 'watercress']; 

// let result = veggies.filter(function(ele) {
//     return ele.includes('a'); 
// }); 

// console.log(result); // => [ 'cabbage', 'watercress' ]

let myFilter = function(array, cb) { 
    let selected = []; 
    array.forEach(function(el, i) { 
        if (cb(el, i, array) === true) { 
            selected.push(el); 
        }
    }); 
    return selected; 
}

let result = myFilter(veggies, function(ele) {
    return ele.includes('a'); 
}); 
    
console.log(result); 
