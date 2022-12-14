const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000; 
    this.attackTarget = null; 
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in

    // a string of all exits from the current room
    const exits = this.currentRoom.getExits(); 

    // generate a random direction from the exits
    let direction = exits[Math.floor(Math.random() * exits.length)];

    this.currentRoom = this.currentRoom.getRoomInDirection(direction);
    this.cooldown = 3000; 
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack(damage = 10) {
    // Fill this in
    this.player.applyDamage(damage);
    this.cooldown = 3000;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;

    if (this.health <= 0) {
      this.health = 0; 
    }

    if (this.health === 0) { 
      this.die(); 
    } 

    this.attackTarget = this.player; 
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
