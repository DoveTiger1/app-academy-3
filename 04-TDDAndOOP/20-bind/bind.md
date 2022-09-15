Function.prototype.bind()

No matter how a function is called, it is bind with a particular `this` value. 

```js
class Cat { 
    purr() { 
        console.log("meow");
    }

    purrMore() { 
        this.purr();
    }
}

let cat = new Cat();

let sayMeow = cat.purrMore();

sayMeow(); // TypeError: this.purr is not a function 

// ensures the context is the cat object
let boundCat = sayMeow.bind(cat); 

// invoke the function 
boundCat(); // prints "meow"
```
