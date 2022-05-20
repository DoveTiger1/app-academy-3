// return a new array containing three times
// every number of the original array 

function tripler(arr) { 
    let newArr = []; 

    for (let i = 0; i < arr.length; i++) { 
        let num = arr[i] * 3; 
        newArr.push(num); 
    }
    return newArr; 
}


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
