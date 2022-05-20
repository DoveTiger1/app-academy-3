// return a new sentence where every word begins with it's first vowel

function consonantCancel(sentence) {
    let arr = sentence.split(" "); 
    let newArr = []; 
    let vowels = "aeiou"; 

    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i]; 
        newArr.push(firstVowel(word)); 
    }

    return newArr.join(" "); 
}

function firstVowel(word) { 
    let vowels = "aeiou"; 
    for (let j = 0; j < word.length; j++) { 
        if (vowels.includes(word[j])) { 
            return word.slice(j); 
        } 
    }
    return word; 
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

// a/A solution

// let vowels = "aeiou"; 

// function consonantCancel(sentence) {
//     let words = sentence.split(" ");
//     let newWords = words.map(word => removeFirstConsonants(word));
//     return newWords.join(" ");
// }

// function removeFirstConsonants(word) {
//     const vowels = "aeiou";
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) {
//             return word.slice(i);
//         }
//     }
// }

// console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
// console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
