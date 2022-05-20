// return shortest word in the sentence 

function shortestWord(sentence) { 
    let arr = sentence.split(" "); 
    let shortest = arr[0]; 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i]; 
        if (word.length <= shortest.length) { 
            shortest = word; 
        }
    }

    return shortest; 
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
