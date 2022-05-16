// when num > 0 rotate to the right 
// when num < 0 rotate to the left 
// should mutate the original array 

function rotate(arr, num) { 
    if (num > 0) { 
        for (let i = 0; i < num; i++) { 
            let ele = arr.pop(arr[i]); 
            arr.unshift(ele); 
        }
    } else if (num < 0) { 
        for (let i = 0; i < num; i++) { 
            let ele = arr.shift(arr[i]); 
            arr.push(ele); 
        }
    }
    return arr; 
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
