const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");

const emojiCodes = [0x1F34B, 0x1F349, 0x1F34A, 0x1F350, 0x1F95D, 0x1F34E];
const emojis = emojiCodes.map(code => String.fromCodePoint(code));

describe ('Bejeweled', function () {

  // Add tests for setting up a basic board
  let bejeweled; 
  this.beforeEach(() => {
    bejeweled = new Bejeweled();
  })

  // Add tests for a valid swap that matches 3
  describe('constructor function', function() { 
    it ('should create a board', function() {
        expect(bejeweled instanceof Bejeweled).to.be.true;
    });

    it ('should be filled with random emojis', function() { 
        let full = true; 
        let isEmoji = (ele) => emojis.includes(ele);  

        Screen.grid.forEach((row) => { 
            if (!row.every(isEmoji)) {
                full = false; 
            }
        }); 

        expect(full).to.be.true; 
    })
  });

  // Add tests for swaps that set up combos

  // Add tests to check if there are no possible valid moves

});
