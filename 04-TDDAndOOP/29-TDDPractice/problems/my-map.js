function myMap(inputArray, callback) {
  // Your code here

  let newArr = []; 

  for (let i = 0; i < inputArray.length; i++) { 
    let el = inputArray[i]; 
    let res = callback(el, i, inputArray); 
    newArr.push(res); 
  }

  return newArr; 
}

module.exports = myMap;
