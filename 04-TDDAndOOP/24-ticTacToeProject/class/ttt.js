const Screen = require("./screen");
const Cursor = require("./cursor");

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
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  // static emptyGrid(grid) { 
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       if (grid[i][j] !== ' ') {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // }

  static winnerHorizontal(grid, letter) { 
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] === letter && grid[i][1] === letter && grid[i][2] === letter) {
        return true; 
      }
    }
    return false; 
  }

  static winnerVertical(grid, letter) { 
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] === letter && grid[1][i] === letter && grid[2][i] === letter) {
        return true; 
      }
    }
    return false; 
  }

  static winnerDiagonal(grid, letter) { 
    if (grid[0][0] === letter && grid[1][1] === letter && grid[2][2] === letter) {
      return true; 
    } else if (grid[0][2] === letter && grid[1][1] === letter && grid[2][0] === letter) {
      return true; 
    } else {
      return false; 
    }
  }

  static checkTie(grid) { 
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] !== 'X' && grid[i][j] !== 'O') {
          return false;
        }
      }
    }
    return true;
  }


  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
  
    // if (TTT.emptyGrid(grid)) { 
    //   return false; 
    // } 

    if (TTT.winnerHorizontal(grid, 'X') || TTT.winnerVertical(grid, 'X')
        || TTT.winnerDiagonal(grid, 'X')) {
      return `X`;
    }

    if (TTT.winnerHorizontal(grid, 'O') || TTT.winnerVertical(grid, 'O')
        || TTT.winnerDiagonal(grid, 'O')) {
      return `O`;
    }

    if (TTT.checkTie(grid)) {
      return `T`;
    }

    return false; 
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
