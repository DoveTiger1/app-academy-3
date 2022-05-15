// takes in array of words 
// return an array containing only the words that 
// are longer than 5 characters 

function longWords(arr) { 
    let fiveArr = []; 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i]; 

        if (word.length > 5) { 
            fiveArr.push(word); 
        }
    }
    return fiveArr; 
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
