// return initals for a full name 

function initials(name) {
    let word = name.split(" "); 
    let inital = []; 

    // iterate through each word and locate the initals
    for (let i = 0; i < word.length; i++) { 
        // two dimensional array 
        let char = word[i][0]; 
        // push the initals to the initial array
        inital.push(char.toUpperCase()); 
    }

    // join array into string with no spaces 
    return inital.join(""); 

}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
