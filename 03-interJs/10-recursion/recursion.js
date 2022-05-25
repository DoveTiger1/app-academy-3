// Recursion

// The base case describes the situation where data passed into our function is processed without any additional recursion.
// When the base case is executed, the function runs once and ends. 
// Since this results in the function stopping, we may also refer to this as the terminating case.

// The recursive case, as the name suggests, is the situation where the function recurses. 
// This represents the data state that causes a function to call itself. Without a recursive case, a function's just another function!
function gentlyUnpackFruit(contents) {
    console.log("Your " + contents + " have been unpacked!");
}
  
function dump(crate) {
    if (crate.content_type === "crate") {
        dump(crate.contents);
    } else if (crate.content_type === "fruit") {
        gentlyUnpackFruit(crate.contents);
    }
}

determineRow = function(moviegoer) {
    if (moviegoer.personInFront) {
        return 1 + determineRow(moviegoer.personInFront);
    } else {
        return 1;
    }
}
