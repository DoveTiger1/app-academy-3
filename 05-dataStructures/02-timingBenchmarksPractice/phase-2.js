const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let num = []; 
  let next = increment; 

  for (let i = 0; i < 10; i++){ 
    num.push(addNums(next)); 
    next += increment; 
  } 
  return num; 
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let num = []; 
  let next = increment; 

  for (let i = 0; i < 10; i++){ 
    num.push(addManyNums(next)); 
    next += increment; 
  } 
  return num; 
}

module.exports = [addNums10, addManyNums10];
