// take in array of words 
// return a new array where each element of the 
// original array is yelled 

function yeller(arr) { 
    let yelled = []; 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i].toUpperCase(); 
        word += "!"; 
        yelled.push(word); 
    }

    return yelled; 
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
