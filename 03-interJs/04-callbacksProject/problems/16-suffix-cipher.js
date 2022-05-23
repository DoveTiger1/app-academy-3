/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, obj) {
    // convert sentence to an array at space intervals
    let arr = sentence.split(" "); 

    // gather the object keys into an array 
    let keys = Object.keys(obj); 

    // iterate through each word in the sentence 
    let newArr = arr.map(word => { 
        // simultaneously iterate through each suffix keys in the object 
        keys.map(suffix => { 
            // check if word ends with the suffix
            if (word.endsWith(suffix)) { 
                let cb = obj[suffix]; 
                // reassign the word into the value given suffix function
                word = cb(word); 
            }
        }); 
        // return the word into the newArr
        return word; 
    }); 

    // join the newArr into a sentence at space intervals
    return newArr.join(" "); 
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
