const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here

  // Then, add timing code

  // Your code here
  console.time("AddNums10Timing"); 
  let num = []; 
  let next = increment; 

  for (let i = 0; i < 10; i++){ 
    let startTime = Date.now();
    num.push(addNums(next)); 
    next += increment; 
    console.timeLog("AddNums10Timing"); 
    let endTime = Date.now(); 

    console.log(`${endTime - startTime}`); 
  } 
  console.timeEnd("AddNums10Timing"); 
}

console.log(addNums10Timing(10)); 

function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  console.time("AddManyNums10Timing"); 
  let num = []; 
  let next = increment; 

  for (let i = 0; i < 10; i++){ 
    let startTime = Date.now();
    num.push(addManyNums(next)); 
    next += increment; 
    console.timeLog("AddManyNums10Timing"); 
    let endTime = Date.now(); 

    console.log(`${endTime - startTime}`); 
  } 
  console.timeEnd("AddManyNums10Timing"); 
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
