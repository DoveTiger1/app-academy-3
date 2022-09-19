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
    Screen.addCommand('w', 'Move Up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('s', 'Move Down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('a', 'Move Left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', 'Move Right', this.cursor.right.bind(this.cursor));
    Screen.addCommand(`space`, `Place Token`, TTT.turn.bind(this));
    
    Screen.render();
  }

  static turn() {
    Screen.render();
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

    this.playerTurn == "O" ? this.playerTurn = "X" : this.playerTurn = "O";

    const winner = TTT.checkWin(Screen.grid);

    !winner ? Screen.render() : TTT.endGame(winner);
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

    let players = ["X", "O"]; 

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
      
      if (grid.every(row => row.every (v => v != ' '))) { 
        return 'T'; 
      } else { 
        return false;
      }
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
