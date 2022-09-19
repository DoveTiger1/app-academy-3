const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  movementHelper = (directions) => { 
    Screen.render(); 
    this.resetBackgroundColor();

    directions == "left" ? this.col-- : null; 
    directions == "right" ? this.col++ : null;

    this.setBackgroundColor();
    Screen.render(); 
  }

  left() {
    // Move cursor left
    (this.col < 0) ? this.movementHelper("left") : null; 
  }

  right() {
    (this.col < this.numCols) ? this.movementHelper("right") : null;
  }

}


module.exports = Cursor;
