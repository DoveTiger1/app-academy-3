// Array Every Method 

// accepts callback as an argument 

// returns a boolean value if it satisifes the callback 

let veggies = ["lettuce", "celery", "cabbage", "watercress"]; 

// let result = veggies.every(function(ele, i, array) { 
//     return ele.includes("e"); 
// }); 

// let myEvery = function(array, cb) { 
//     array.forEach(ele => { 
//         if (cb(ele) === false) { 
//             return false; 
//         }
//     }); 

//     return true; 
// }; 

// let containsA = myEvery(veggies, function(ele) { 
//     return ele.includes("a"); 
// }); 


// console.log(containsA); 

function myEvery(array, cb) { 
    array.forEach(ele => {
        if (cb(ele) === false) { 
            return false; 
        }
    })
    return true; 
}

// passing my callback function back into myEvery 
function containsA(ele) { 
    return ele.includes("a"); 
}

console.log(myEvery(veggies, containsA)); 
