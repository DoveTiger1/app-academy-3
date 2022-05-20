// function that acceps a word 
// return new word where all letters come after the last vowel including vowel itself 
// are repeated at the end of the word. 

function reverb(str) { 
    if (typeof str !== 'string') { 
        return null; 
    }

    let vowels = "aeiou"; 

    for (let i = str.length - 1; i >= 0; i--) { 
        let char = str[i]; 
        
        if (vowels.includes(char.toLowerCase())) { 
            return str + str.slice(i); 
        }
    }

    return str; 
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
