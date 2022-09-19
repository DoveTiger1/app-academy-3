const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('a', "Move Left", this.cursor.left.bind(this.cursor)); 
    Screen.addCommand('d', "Move Right", this.cursor.right.bind(this.cursor));
    Screen.addCommand("w", "Move Up", this.cursor.up.bind(this.cursor));
    Screen.addCommand("s", "Move Down", this.cursor.down.bind(this.cursor));
    Screen.addCommand(`space`, `Place Token`, ConnectFour.turn.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static turn() {
    Screen.render();
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

    this.playerTurn == "O" ? this.playerTurn = "X" : this.playerTurn = "O";

    const winner = ConnectFour.checkWin(Screen.grid);

    !winner ? Screen.render() : ConnectFour.endGame(winner);
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    let players = ["X", "O"]; 

    for (const player in players) { 
      // Check for horizontal wins
      for (const row in grid) { 
        for (let i = 0; i < 4; i++) { 
          if (grid[row].slice(i, i + 4).every(v => v == players[player])) { 
            return players[player]; 
          }
        }
      }

      // Check for vertical wins 
      for (const col in grid[0]) { 
        for (let i = 0; i < 3; i++) { 
          if (grid.slice(i, i + 4).every(v => v[col] == players[player])) { 
            return players[player]; 
          }
        }
      }

      // Check for diagonal wins
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (grid[i][j] == players[player] && grid[i + 1][j + 1] == players[player] && grid[i + 2][j + 2] == players[player] && grid[i + 3][j + 3] == players[player]) {
            return players[player];
          }
        }
      }

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (grid[i + 3][j] == players[player] && grid[i + 2][j + 1] == players[player] && grid[i + 1][j + 2] == players[player] && grid[i][j + 3] == players[player]) {
            return players[player];
          }
        }
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

module.exports = ConnectFour;
