const { Item } = require('./item');

class Light extends Item {

  constructor(name, description) {
    super(name, description);
    this.light = false; 
  }

  turnOn() { 
    this.light = true;
  }

  turnOff() { 
    this.light = false;  
  }
}

module.exports = {
  Light,
};
