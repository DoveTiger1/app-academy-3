# Single Responsibilty Principle (SRP)

> Every module, class or function in a computer program should have resopnsibility over a single part of functionality

> limiting the impact of changing your code.

## Makes code easier to change and easier to identify the section of code that needs to be changed. 

Consider the function for abbreviating words in a sentence. If a word in the sentence is longer than 3 characters, shorten it to be three characters without any vowels.

```js 
const vowels = "aeiou";

const abbreviateWords = function(sentence) { 
    const words = sentence.split(" "); 

    for (let i = 0; i < words.length; i++) { 
        const word = words[i]; 
        if (word.length > 3) { 
            let newWord = ""; 
            let charIdx = 0;                         
        

            while (charIdx < word.length && newWord.length < 3) { 
                let char = word[charIdx]l 
                if (!vowels.includes(char)) { 
                    newWord += char; 
                }
                charIdx++; 
            }
            words[i] = newWord; 
        }
    }
    return words.join(" "); 
}; 

console.log(abbreviateWords("Hello World!")); // Hll Wrl 
```

We can refactor the above code by reducing into steps 

1. Separate the sentence (string) into words, change the words then return it 
2. For each word, change the word if the length of the words is greater than 3 
3. If the length of the words is greater than 3, change the word to have a maxmimum length of 3 without any vowels 


```js 
const vowels = "aeiou"; 

const changeWord = function(sentence) { 
    let newWord = ""; 
    let charIdx = 0; 

    while (charIdx < word.length && newWord.length < 3) { 
        let char = word[charIdx]; 
        if (!vowels.includes(char)) { 
            newWord += char; 
        }
        charIdx++; 
    }

    return newWord; 
}

const abbreviateWord = function(word) { 
    if (word.length > 3) { 
        return changeWord(word); 
    } 
    return word; 
}

const abbreviateWords = function(sentence) { 
    const words = sentence.split(" "); // split the sentence string into an array 

    for (let i = 0; i < words.length; i++) { // iterate thorugh each word 
        const word = words[i]; 
        // words.splice(index of the arary, steps, new elements to insert the array
        words.splice(i, 1, abbreviateWord(word)); // replace the current word with the new abbreviated word 
    }
    return words.join(" "); 
};

console.log(abbreviateWords("Hello World")); // Hll wrl 
```
