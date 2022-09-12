// Your code here

// Phase 1: Create a Dragon 

class Dragon { 
  constructor(name, color) {
    this.name = name; 
    this.color = color; 
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    let name = []; 

    dragons.forEach((dragon) => {
      if (dragon instanceof Dragon) {
        name.push(dragon.name);
      }
    });
    
    return name;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
