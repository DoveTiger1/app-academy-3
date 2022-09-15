// Your code here

const Employee = require('./employee');

const john = new Employee('John Wick', "Dog Lover");

const unboundName = john.sayName;
setTimeout(unboundName.bind(john), 2000);

const unboundOccupation = john.sayOccupation;
setTimeout(unboundOccupation.bind(john), 3000);
