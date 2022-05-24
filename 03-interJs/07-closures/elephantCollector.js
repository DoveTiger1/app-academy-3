// Closure 

function elephantCollector() { 
    const elephants = ["dumbo"]; 

    return function(name) { 
        elephants.push(name); 
        return elephants; 
    };
}

const elephantParade = elephantCollector(); 

console.log(elephantParade("mom")); 
