// Your code here

Array.prototype.isEqual = function(arr) { 
    return this.reduce((prev, el, i) => {
        if (el !== arr[i]) {
            prev = false; 
            return prev;
        } else { 
            prev = true; 
            return prev; 
        }
    });
}
