
// reverse sentence 

function reverseSentence(string) { 
    return string.split(" ").reverse().join(" "); 
}




console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
