// return a new string containing only words that don't have letter e

let removeEWords = function(sentence) { 
    // split the string into an array 
    let wordArr = sentence.split(" "); 

    // filtered array 
    let filtered = []; 

    // iterate through the array 
    for (let i = 0; i < wordArr.length; i++) { 
        let word = wordArr[i]; 

        if (!word.toLowerCase().includes("e")) { 
            filtered.push(word); 
        }
    }

    // convert array to string 
    return filtered.join(" "); 
}; 

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
