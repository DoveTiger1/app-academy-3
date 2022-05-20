//  takes in a string 
// returns the last vowel that appears sequentially in the string. 
// Note that the string may contain capitalization.

let lastVowel = function(str) { 
    let vowels = "aeiou"; 
    let reverse = str.split("").reverse().join(""); 

    for (let i = 0; i < reverse.length; i++) { 
        let char = reverse[i]; 
        if (vowels.includes(char.toLowerCase())) { 
            return char; 
        }
    }
    return null; 
}; 

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
