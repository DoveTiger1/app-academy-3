const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
}

module.exports = {
  Player,
};
