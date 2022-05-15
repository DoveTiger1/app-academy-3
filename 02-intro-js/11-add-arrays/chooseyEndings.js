// accepts an array of words and a suffix string as arugments 
// function should return a new array contianing words 
// that end in suffix

function chooseyEndings(arr, suffix) { 

    // if the array is not an array return an empty array
    if (!Array.isArray(arr)) { 
        return []; 
    }

    // filtered empty array 
    let filtered = []; 

    // iterate thorugh the array 
    for (let i = 0; i < arr.length; i++) { 
        // let each word 
        let word = arr[i]; 

        // if words ends with suffix
        if (word.endsWith(suffix)) { 
            // push the word to the end of the filtered array
            filtered.push(word); 
        }
    }

    return filtered; 
}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
