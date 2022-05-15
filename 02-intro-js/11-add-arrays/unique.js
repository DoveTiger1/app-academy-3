// accepts an arrays 
// return a new arrya containing elements of the input array 
// without duplicates 

function unique(arr) { 
    let newArr = []; 

    for (let i = 0; i < arr.length; i++) { 
        let num = arr[i]; 

        if (!newArr.includes(num)) { 
            newArr.push(num); 
        }
    }

    return newArr; 
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
