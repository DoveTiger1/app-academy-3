// returns a string where every word is missing its last vowel 

function hipsterfy(sentence) {
    let arr = sentence.split(" "); 
    let newArr = []; 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i]; 
        newArr.push(removeVowels(word)); 
    }

    return newArr.join(" "); 
}

function removeVowels(word) { 
    let vowels = "aeiou"; 
    let newWord = ""; 
    
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]; 
        if (vowels.includes(char)) { 
            return word.slice(0, i) + word.slice(i + 1); 
        }
    }
    return word; 
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
