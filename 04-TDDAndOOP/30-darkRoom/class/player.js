const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
const {Light} = require('./light.js'); 

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    let room = this.currentRoom; 

    let item = room.getItemByName(itemName); 
    this.items.push(item); 
    room.items.splice(room.items.indexOf(item), 1); 
  }

  dropItem(itemName) {

      // Fill this in
    let room = this.currentRoom; 

    let item = this.getItemByName(itemName); 
    room.items.push(item); 
    this.items.splice(this.items.indexOf(item), 1); 

  }

  eatItem(itemName) {

      // Fill this in 
    if (this.getItemByName(itemName) instanceof Food) { 
        this.dropItem(itemName); 
        return "yes"; 
    }
  }

  useLightOn(itemName) { 

    if (this.getItemByName(itemName) instanceof Light) { 
      this.getItemByName(itemName).turnOn(); 
      console.log("Light is now on");
    }
  }

  useLightOff(light) { 

    if (this.getItemByName(light) instanceof Light) { 
      this.getItemByName(light).turnOff(); 
      console.log("Light is now off"); 
    }
  }

  getItemByName(name) {

      // Fill this in
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
          return this.items[i]; 
      }
    }
  }

  hit(name) {

    // Fill this in
    const enemy = this.currentRoom.getEnemyByName(name);
    enemy.applyDamage(); 
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
