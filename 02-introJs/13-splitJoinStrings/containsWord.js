// return boolean indicating whether the targetWord is found inside 
// of the sentence. 

function containsWord(string, targetWord) { 
    let arr = string.split(" "); 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i].toLowerCase(); 

        if (targetWord === word) { 
            return true; 
        }
    }
    return false; 
}

console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false
