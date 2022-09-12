// Your code here

// Phase 2: Create a Friendly Dragon
const Dragon = require('./dragon.js');

class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = (Array.isArray(lifeGoals)) ? lifeGoals : [];
    this.friend = friend;
  }

  hasLifeGoals() { 
    this.lifeGoals.forEach((lifeGoal) => {
        console.log(`${this.name} likes to ${lifeGoal}`);
    });
  }

  helpsPeople() { 
    return `${this.name} helps their friend ${this.friend}`;
  }
}

try {
    module.exports = FriendlyDragon;
} catch {
    module.exports = null;
}
