// return longest word in the sentence 
// if there is more than one longest word return first of these instances 

function longestWord(sentence) { 
    let words = sentence.split(" "); 
    let longest = ""; 

    for (let i = 0; i < words.length; i++) { 
        let word = words[i]; 

        
        if (word.length > longest.length) { 
            longest = word; 
        }
    }

    return longest; 
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
