# Module Imports 

## Dependencies 
> When a module needs something from another module, it is said to be dependent on that nodules. They are other modules that are required to run properly. 

> Important to know the relative path from the importing code 

## Importing using `require` function 
Consider the file structure below
```
./school
├── courses
|  ├── physics.js
|  └── music.js
└── people
    ├── students.js
    └── teachers.js
```
Import the `student.js` module into the `physics.js` 

```js 
const students = require('../people/students'); 
```

## Importing multiple items from a module 
> In the `calculator.js`, `add`, `subtract` and `operations` were properties of a single object exported from the modue. To import, extract properties like so: 

```js 
const calculator = require(`./calculator`); 
const add = calculator.add; 
const subtract = calculator.subtract; 
const operations = calculator.operations; 

// Object Destructuring 
const {add, subtract, operations} = require(`./calculator`); 
```

## Importing an item from a module with a single export 
```js 
// calculator.js 
// ... 

module.exports = opertions; 

// module that is importing 
const operations = require(`./calculator`); 
```

## Folder Module
> folder can be loaded as a module in Node.js

> Must have index.js in the folder, it prompts Node.js to look for index.js in that folder to import 

Consider the file structure 

```
./school
├── courses
|   ├── physics.js
|   └── music.js
└── people
    ├── index.js
    ├── students.js
    └── teachers.js
```

To load the `index.js` file in the people folder as a module inside of the `physics.js` 

```js 
// physics.js 
// ... 

const people = require('../people/'); 
// const people = require('../people/index.js'); // equivalent import
``` 
