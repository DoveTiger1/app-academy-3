const findMinimum = arr => {

  // Your code here
  if (arr.length === 0) return undefined;
  return Math.min(...arr); 

  // return arr.reduce((accum, el) => { 
  //   return accum < el ? accum : el; 
  // }); 
};

const runningSum = arr => {

  // Your code here
  const newArr = []; 
  if (arr.length === 0) return []; 

  // iterate through the array 
  for (let i = 0; i < arr.length; i++) { 
    let sum = 0; 
    for (let j = 0; j <= i; j++) { 
      sum += arr[j]; 
    }
    newArr.push(sum); 
  }

  return newArr; 
};

const evenNumOfChars = arr => {

  // Your code here
  let count = 0; 
  arr.forEach((el) => { 
    if (el.length % 2 === 0) { 
      count++; 
    }
  }); 

  return count; 
};

const smallerThanCurr = arr => {

  // Your code here
  const newArr = []; 
  for (let i = 0; i < arr.length; i++) { 
    let count = 0; 
    for (let j = 0; j < arr.length; j++) { 
      if (arr[i] > arr[j]) { 
        count++; 
      }
    }
    newArr.push(count); 
  }
  return newArr; 
};

const twoSum = (arr, target) => {

  // Your code here
  for (let i = 0; i < arr.length; i++) { 
    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[i] + arr[j] === target) return true; 
    }
  }

  return false;
};

const secondLargest = arr => {

  // Your code here
  if (arr.length === 0 || arr.length === 1) return undefined;
  arr.splice(arr.indexOf(Math.max(...arr)), 1); // mutates the original array at arr.splice(index, how many)
  return Math.max(...arr); 
};

const shuffle = (arr) => {``
  var newArray = [].concat(arr);

  // Your code here
  let currentIndex = newArray.length; 
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(shuffle(arr)); 
module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
