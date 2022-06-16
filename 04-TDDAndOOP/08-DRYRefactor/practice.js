const isGreater = (num1, num2) => { 
  let bigNum; 
  if (num1 > num2) { 
    bigNum = num1; 
  } else { 
    bigNum = num2; 
  }
  return bigNum; 
}; 

function multiplyBiggerNumByTwo(num1, num2) {
  
  return isGreater(num1, num2) * 2; 
}

function divideBiggerNumByThree(num1, num2) {
  return isGreater(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${isGreater(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${isGreater(num1, num2)} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
