// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    let vowels = "aeiou"; 

    // first character that has a vowel 
    if (vowels.includes(word[0])) { 
        return word + "yay"; 
    }

    // letters that start with a non-vowel 
    // iterate through the string to find the first vowel 
    // separate the string into two parts using slice
    // first part is exclusive with the vowel 
    for (let i = 0; i < word.length; i++) { 
        let char = word[i]; 
        if (vowels.includes(char)) { 
            let secondPart = word.slice(i); 
            let firstPart = word.slice(0, i); 
            return  secondPart + firstPart + "ay"; 
        }
    }
    return word; 
}; 
  
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
