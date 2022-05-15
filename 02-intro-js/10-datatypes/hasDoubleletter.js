
// accepts a stirng 
// return a boolean indicating whether the string contains two of the same character 
// if not a string return null 

function hasDoubleLetter(str) { 
    if (typeof str !== 'string') { 
        return null; 
    }

    for (let i = 0; i < str.length; i++) { 
        if (str[i] === str[i - 1]) { 
            return true; 
        }
    }

    return false; 
}


console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null
