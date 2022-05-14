// Write a function hasThreeVowels that accepts a string as an argument. 
// The function should return a boolean indicating whether or not the string contains at least three different vowels.

function hasThreeVowels(str) { 
    let vowels = "aeiou"; 
    let count = 0; 

    for (let i = 0; i < str.length; i++) { 
        if (vowels.includes(str[i])) { 
            count++; 
        }
    }
    return count > 3; 
}; 

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
