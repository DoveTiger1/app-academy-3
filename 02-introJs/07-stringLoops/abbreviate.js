// Write a function abbreviate(word) that takes in a string arg. 
// The function should return a new string where all of its vowels are removed.

// your code here
function abbreviate(word) {
    let vowels = "aeiou"; 
    let str = ""; 

    for (let i = 0; i < word.length; i++) { 
        let char = word[i]; 

        if (!vowels.includes(char.toLowerCase())) {
            str += char;  
        }
    }
    return str; 
}; 

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
