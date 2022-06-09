# Module Exports 

> To make a module (file) acesssible to other modules (files) in your API, need to export them 

> Each module in Node has acess to a module object that represents the current module 

## Assigning an object to the `module.exports` property 

```js 
const operations = ['+', '-', '*']; 

function add(num1, num2) { 
    //...
}

function subtract(num1, num2) {
    //...
}

function multiply(num1, num2) {
    //... 
}

module.exports = { // only add, subtract and operations get exported from this
    add, 
    subtract, 
    operations
}; 

// above is shorthand for 
// module.exports = { 
//     add: add, 
//     subtract: subtract, 
//     operations: operations
// }; 
```

## Set Properties on the `module.exports` object

> To export an item as a property on `module.exports` can assign a property directly on the `module.exports` property. 

Consider the previous example 
```js
// set the add, subtract and operations properties on the module.exports object as an item 
module.exports.add = add;  
module.exports.subtract = subtract; 
module.exports.operations = operations; 

// do not need to match the names however by convention and to maintain readability it is good practice to do so
```

## `Exports` Shortcut 

> Node provides an `exports` shortcut intialized to `module.exports` property value. 

```js 
exports.add = add;  
exports.subtract = subtract; 
exports.operations = operations;
```

## Exporting a single item from a module 
```js 
// set module.exports to the operations function this way 
module.exports = operations;
```
