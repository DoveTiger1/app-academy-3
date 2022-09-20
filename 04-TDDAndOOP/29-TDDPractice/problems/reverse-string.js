function reverseString(string) {
  // Your code here
  let newString = ""; 

  if (typeof string !== "string") {
    throw new Error();
  }

  for (let i = string.length - 1; i >= 0 ; i--) { 
    newString += string[i]; 
  }

  return newString; 
}

module.exports = reverseString; 
