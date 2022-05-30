// Threading

// single threaded
// javascript is a single threaded language
// one execution at a time 

// multi threaded 
// can be processed at the same time 

setTimeout(function() { 
    console.log("Time up!");
}, 1000); 

let i = 0; 
while (true) { 
    i++; 
}
// enters the loop infinitely 

// setTimeout will never be handled since the loop will never compelete 
