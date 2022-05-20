// return a new string where the order of the characters is reversed.

let reverseString = function(str) { 
    let reverse = str.split("").reverse().join("");

    return reverse; 
}; 

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
