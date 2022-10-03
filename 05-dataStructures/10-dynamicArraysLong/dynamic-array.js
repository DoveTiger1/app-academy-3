class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0; 
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];  
  }

  push(val) {

    // Your code here
    if (this.length == this.capacity) {
      this.resize();
    }

    this.data[this.length] = val; 
    this.length++;
  }


  pop() {

    // Your code here
    this.length--; 
    return this.data[this.length];
  }


  shift() {

    // Your code here

    let ele = this.data[0]; 
    let shifted = new Array(this.capacity); 

    for (let i = 0; i < this.length; i++) { 
      shifted[i] = this.data[i + 1]; 
    }

    this.length--; 
    this.data = shifted; 
    return ele; 
  }

  unshift(val) {
    // Your code here
    if (this.length === this.capacity) {
      this.resize();
    }

    let unShifted = new Array(this.capacity);
    unShifted[0] = val;
    
    this.length++;

    for (let i = 0; i < this.length; i++) {
      unShifted[i+1] = this.data[i];
    }

    this.data = unShifted;
  }

  indexOf (val) {

    // Your code here
    for (let i = 0; i < this.length; i++) { 
      if (this.data[i] === val) { 
        return i; 
      }
    }

    return -1; 
  }

  resize () {

    // Your code here
    let resized = new Array(this.length * 2); 

    for (let i = 0; i < this.data.length; i++) { 
      resized[i] = this.data[i]; 
    }

    this.data = resized; 
    this.capacity = this.capacity * 2; 
  }

}


module.exports = DynamicArray;
