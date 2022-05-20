// return new array where elements of a the array 
// of the right num times

function rotateRight(arr, num) {
    // copies the array without mutating the original array 
    // arr.slice(0, endIndex); 
    let copy = arr.slice(); 

    for (let i = 0; i < num; i++) { 
        // store the last element in the array 
        let ele = copy.pop(i); 

        // add to the front of the element 
        copy.unshift(ele); 
    }
    return copy; 

}


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
