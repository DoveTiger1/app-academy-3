// takes in a string and returns string with its last vowel removed

let removeLastVowel = function(str) { 
    let vowels = "aeiou"; 

    // iterate backwards as we want the last vowel 
    for (let i = str.length - 1; i >= 0; i--) { 
        let char = str[i]; 
        if (vowels.includes(char)) { 
            // first part until the vowel + part after exclusive the vowel 
            return str.slice(0, i) + str.slice(i + 1); 
        }
    }
    // no vowel in string return the word itself 
    return str; 
}; 

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
