const Screen = require("./screen");
const Cursor = require("./cursor");
const { gridLines } = require("./screen");
const ComputerPlayer = require("./computer-player");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("c", "Play against computer", TTT.playComputer.bind(this));
    Screen.addCommand("r", "Restart", TTT.restart.bind(this));
    Screen.addCommand("space", "Place Move", TTT.place.bind(this));
    Screen.addCommand("up", "Move Up", TTT.moveUp.bind(this));
    Screen.addCommand("down", "Move Down", TTT.moveDown.bind(this));
    Screen.addCommand("left", "Move Left", TTT.moveLeft.bind(this));
    Screen.addCommand("right", "Move Right", TTT.moveRight.bind(this));

    // Update messages 
    TTT.updateMsg.call(this);
    this.cursor.setBackgroundColor();
  }

  static updateMsg() {
    Screen.message = ` It is ${this.playerTurn}'s turn`;
  }

  static restart() {
    this.playerTurn = "O";

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Screen.grid[i][j] = " ";
      }
    }

    Screen.message = ` It is ${this.playerTurn}'s turn`;

    if (this.computer) {
      Screen.message = "Playing against computer. It is your turn (O).";
    }

    Screen.render();
    Screen.printCommands();
  }

  static playComputer() {
    this.computer = new ComputerPlayer();

    TTT.restart();

    this.playerTurn = "O";
    Screen.message = "Playing against computer. It is your turn (O).";

    Screen.render();
    Screen.printCommands();
  }

  static computerMove() {
    let move = ComputerPlayer.getSmartMove(Screen.grid, "X");

    Screen.setGrid(move.row, move.col, "X");

    if (TTT.checkWin(Screen.grid)) {
      TTT.endGame(TTT.checkWin(Screen.grid));
    }

    this.playerTurn = "O";
    Screen.message = "Playing against computer. It is your turn (O).";
    Screen.render();
    Screen.printCommands();
  }

  static moveUp()  {
    this.cursor.up();
  }

  static moveDown()  {
    this.cursor.down();
  }

  static moveLeft()  {
    this.cursor.left();
  }

  static moveRight()  {
    this.cursor.right();
  }

  static place() {
    Screen.render();
    if (Screen.grid[this.cursor.row][this.cursor.col] === " ") {
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

      if(!this.computer) {
        this.playerTurn == "O" ? this.playerTurn = "X" : this.playerTurn = "O";
      }

      TTT.updateMsg.call(this);
      Screen.render();
      Screen.printCommands();

      let winner = TTT.checkWin(Screen.grid); 
      winner ? TTT.endGame(TTT.checkWin(Screen.grid)) : null;

      if (this.computer) {
        TTT.computerMove()
      }
      
    } else {
      TTT.updateMsg.call(this);
      Screen.message += "; invalid move";

      Screen.setBackgroundColor(this.cursor.row, this.cursor.col, "red");
      Screen.render();
      Screen.printCommands();
    }
  }

  static flipGrid(grid) { 
    let newGrid = []; 

    for (const col in grid) { 
      let flipped = grid.map(row => row[col]);
      newGrid.push(flipped);
    }

    return newGrid; 
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    const mirroredGrid = TTT.flipGrid(grid); 

    let players = ["O", "X"]; 

    for (const player in players) { 
      // Check for horizontal wins
      for (const row in grid) { 
        if (grid[row].every(el => el == players[player])) { 
          return players[player]; 
        }
      }

      // Check for vertical wins 
      for (const col in mirroredGrid) { 
        if (mirroredGrid[col]. every(el => el == players[player])) { 
          return players[player]; 
        }
      }  

      // Check for diagonal wins
      if (
        grid[0][0] == players[player] && 
        grid[1][1] == players[player] &&
        grid[2][2] == players[player]
      ) { 
        return players[player]; 
      } else if (
        grid[0][2] == players[player] && 
        grid[1][1] == players[player] &&
        grid[2][0] == players[player]
      ) { 
        return players[player]; 
      }
    }
     // Check for tie game 
    if (grid.every(row => row.every (v => v != ' '))) { 
      return 'T'; 
    } else { 
      return false;
    }
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();

    Screen.quit();
  }

}

module.exports = TTT;
