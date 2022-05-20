// return a PascalCased version of the string snake_case 
// removes the underscore and the first char of eachw or is capital
// all other chars are lowercase

function snakeToCamel(string) { 
    let arr = string.split("_"); 
    let newArr = []; 
    for (let i = 0; i < arr.length; i++) { 
        let word = arr[i]; 
        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase(); 
        newArr.push(newWord); 
    }

    return newArr.join("");
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
