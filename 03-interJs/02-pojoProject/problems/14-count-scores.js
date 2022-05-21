/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

function countScores(people) {
  // your code here
  let objects = {}

  people.forEach(function(ele) {
    // get the values only of each key => [index 1]
    let valOfKeys = Object.values(ele)[1];

    for (let key in ele) {
      // destructure and access the key only which is 'name'
      let {name} = ele;

      // if name is found, push the values of each keys as an array
      if (name in objects) {
        objects[name].push(valOfKeys);
        break // will have to put break here, else it will loop again
      } else {
        objects[name] = []; // set each key values as an array
      }
    }
  });

  getSum(objects);
  return objects;
}
  
// get sum of key values
function getSum(obj) {
  for (let key in obj) {
    let sum = obj[key].reduce(function(acc, num) {
      return acc + num;
    }, 0);
    obj[key] = sum;
  }
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
