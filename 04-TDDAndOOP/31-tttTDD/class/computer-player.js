
class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let validMoves = []; 

    grid.forEach((rows, i) => { 
      rows.forEach((cols, j) => { 
        if (grid[i][j] === " ") {
          validMoves.push({row: i, col: j});
        }
      });
    });

    return validMoves;
  }

  static randomMove(grid) {

    // Your code here
    let moves = ComputerPlayer.getValidMoves(grid);
    // return moves[randomInt(moves.length, 0)];

    return moves[0]; 
  }

  static getWinningMoves(grid, symbol) {

    // Your code here
    let winners = [];
    let winningColumns = checkColumns(grid, symbol);
    let winningRows = checkRows(grid, symbol);
    let winningDiag = checkDiag(grid, symbol);

    winners = [...winners, ...winningColumns, ...winningRows, ...winningDiag];
    
    return winners;
  }

  static getSmartMove(grid, symbol) {

    // Your code here
    let winners = this.getWinningMoves(grid, symbol);
    if (winners.length > 0) {
      return winners[0];
    }

    let opponentWinners = this.getWinningMoves(grid, "O");
    if (opponentWinners.length > 0) {
      return opponentWinners[0];
    }

    return this.randomMove(grid);
  }

}

// Private Helper Functions 

let randomInt = function(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let checkColumns = (grid, symbol) => {
  let winners = [];
  let topRow = grid[0];

  for (let col = 0; col < topRow.length; col++) {

    let count = {
      "X": 0,
      "O": 0,
      " ": 0,
      "positionOfSpace": {row: 0, col: 0}
    }

    for (let row = 0; row < grid.length; row++) {

      count[grid[row][col]]++;
      if (grid[row][col] === " ") {
        count.positionOfSpace.row = row;
        count.positionOfSpace.col = col;
      }

    }

    if(count[symbol] === 2 && count[" "] === 1) {
      winners.push(count.positionOfSpace);
    }
  }

  return winners;
}

let checkRows = (grid, symbol) => {

  let winners = [];

  for (let rows = 0; rows < grid.length; rows++) {
    let row = grid[rows];
    let count = {
      "X": 0,
      "O": 0,
      " ": 0,
      "positionOfSpace": {row:0, col:0}
    }

    for (let cols = 0; cols < row.length; cols++) {

      count[grid[rows][cols]]++;
      if (grid[rows][cols] === " ") {
        count.positionOfSpace.row = rows;
        count.positionOfSpace.col = cols;
      }
    }

    if(count[symbol] === 2 && count[" "] === 1) {
      winners.push(count.positionOfSpace);
    }
  }

  return winners;
}

let checkDiag = (grid, symbol) => {
  let winners = [];

  winners = [...winners, ...(checkDown(grid, symbol)), ...(checkUp(grid, symbol))];

  return winners;
}

let checkDown = (grid, symbol) => {
  let winners = [];

  let count = {
    "X": 0,
    "O": 0,
    " ": 0,
    "positionOfSpace": {row:0, col:0}
  }

  for (let i = 0; i < grid.length; i++) {
    count[grid[i][i]]++;
    if (grid[i][i] === " ") {
      count.positionOfSpace.row = i;
      count.positionOfSpace.col = i;
    }
  }

  if(count[symbol] === 2 && count[" "] === 1) {
    winners.push(count.positionOfSpace);
  }

  return winners;
}

let checkUp = (grid, symbol) => {
  let winners = [];

  let count = {
    "X": 0,
    "O": 0,
    " ": 0,
    "positionOfSpace": {row:0, col:0}
  }

  for (let i = grid.length-1; i >= 0; i--) {

    count[grid[i][2-i]]++;
    if (grid[i][2-i] === " ") {
      count.positionOfSpace.row = i;
      count.positionOfSpace.col = 2-i;
    }
  }

  if(count[symbol] === 2 && count[" "] === 1) {
    winners.push(count.positionOfSpace);
  }

  return winners;
}

module.exports = ComputerPlayer;
