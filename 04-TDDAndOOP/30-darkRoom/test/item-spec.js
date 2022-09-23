const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");
const {Light} = require("../class/light.js"); 

describe ('Item', function () {

  it('should have name and description attributes', function () {
    let item = new Item("rock", "just a simple rock");

    expect(item.name).to.equal("rock");
    expect(item.description).to.equal("just a simple rock");

  });


  it('can be retrieved from player inventory by name', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);
    expect(player.items.length).to.equal(1);

    expect(player.getItemByName("rock")).to.equal(item);

  });

  it('can be retrieved from a room by name', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");

    room.items.push(item);
    expect(room.items.length).to.equal(1);

    expect(room.getItemByName("rock")).to.equal(item);

  });

  it('can be picked up from a room by a player', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    room.items.push(item);
    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    player.takeItem("rock");

    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    expect(player.getItemByName("rock")).to.equal(item);

  });


  it('can be dropped into a room by a player', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);
    expect(room.items.length).to.equal(0);
    expect(player.items.length).to.equal(1);

    player.dropItem("rock");

    expect(room.items.length).to.equal(1);
    expect(player.items.length).to.equal(0);

    expect(room.getItemByName("rock")).to.equal(item);

  });


});


describe ('Food', function () {


  it('should have name and description attributes', function () {
    let food = new Food("sandwich", "a delicious sandwich");

    expect(food.name).to.equal("sandwich");
    expect(food.description).to.equal("a delicious sandwich");

  });


  it('should be an instance of Item and Food', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let item = new Item("rock", "just a simple rock");

    expect(food instanceof Item).to.be.true;
    expect(food instanceof Food).to.be.true;

    expect(item instanceof Item).to.be.true;
    expect(item instanceof Food).to.be.false;
  });


  it('can be eaten by a player', function () {
    let food = new Food("sandwich", "a delicious sandwich");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(food);

    expect(player.items.length).to.equal(1);

    // player.eatItem("sandwich");

    // expect(player.items.length).to.equal(0);
    expect(player.eatItem("sandwich")).to.equal("yes"); 
  });


  it('cannot be eaten by a player if not food', function () {
    let item = new Item("rock", "just a simple rock");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(item);

    expect(player.items.length).to.equal(1);

    player.eatItem("rock");

    expect(player.items.length).to.equal(1);
  });

});


describe ('Light', function () {
  it('should have name and description attributes', function () {
    let light = new Light("lamp", "a black ambient lamp");

    expect(light.name).to.equal("lamp");
    expect(light.description).to.equal("a black ambient lamp");
  });


  it('should be an instance of Item and Light', function () {
    let light = new Light("lamp", "a black ambient lamp");
    let item = new Item("rock", "just a simple rock");

    expect(light instanceof Item).to.be.true;
    expect(light instanceof Light).to.be.true;

    expect(item instanceof Item).to.be.true;
    expect(item instanceof Light).to.be.false;
  });

  it('cannot be eaten by a player if not food', function () {
    let light = new Light("lamp", "a black ambient lamp");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(light);

    player.eatItem("light");

    expect(player.items.length).to.equal(1);
  });

  
  it('should turn on light', function () { 
    let light = new Light("lamp", "a black ambient lamp");
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);
    
    player.items.push(light); 
    expect(player.items.length).to.equal(1);
    
    player.getItemByName("lamp").turnOn(); 

    expect(player.getItemByName("lamp")).to.equal(light);
    expect(light.light).to.equal(true);
  }); 
});
