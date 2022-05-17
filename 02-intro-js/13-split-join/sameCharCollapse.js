// collapse the string, we repeatedly delete 2 adjacent characters 
// that are the same until there are no such adjacent characters
// if there are mulitple pairs that can be collapsed, delete the 
// leftmost pair 

function sameCharCollapse(str) {

    let check = true; 

    while (check) { 
        let chars = str.split(""); 
        check = false; 

        for (let i = 0; i < chars.length - 1; i++) { 
            if (chars[i] === chars[i + 1]) {
                chars[i] = ""; 
                chars[i + 1] = ""; 
                check = true; 
            }
        }
        str = chars.join(""); 
    }

    return str; 
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
