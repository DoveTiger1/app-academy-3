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

  up() {
    // Move cursor up
    this.row = (this.row - 1 >= 0) ? this.row - 1 : this.col;
  }

  down() {
    // Move cursor down
    this.row = (this.row + 1 < this.numRows) ? this.row + 1 : this.row;
  }

  left() {
    // Move cursor left
    this.col = (this.col - 1 >= 0) ? this.col - 1 : this.col;
  }

  right() {
    // Move cursor right
    this.col = (this.col + 1 < this.numCols) ? this.col + 1 : this.col;
  }

}


module.exports = Cursor;