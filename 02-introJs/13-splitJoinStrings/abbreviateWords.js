// return a new sentence where words that are longer than 4 
// characters have their vowels removed 

function abbreviateWords(sentence) {
    let arr = sentence.split(" "); 
    let newArr = []; 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i]; 

        if (word.length > 4) { 
            newArr.push(removeVowels(word)); 
        } else { 
            newArr.push(word); 
        }
    }

    return newArr.join(" "); 
}

function removeVowels(word) { 
    let vowels = "aeiou"; 
    let newWord = ""; 
    for (let i = 0; i < word.length; i++) { 
        if (!vowels.includes(word[i])) { 
            newWord += word[i]; 
        }
    }

    return newWord; 
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
