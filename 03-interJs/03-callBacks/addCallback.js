// add Callback

// let add = function (num1, num2, cb) { 
//     let sum = num1 + num2; 
//     let result = cb(sum); 
//     return result; 
// }; 

// let double = function(num) { 
//     return num * 2; 
// }


let add = function(num1, num2, cb) { 
    // if a callback function is not passed into 
    // cb would be undefined 

    // we can create a condition below 
    if (cb === undefined) { 
        return num1 + num2; 
    } else { 
        return cb(num1 + num2); 
    }
}; 

console.log(add(9, 40)); 
console.log(add(9, 40, Math.sqrt)); 
