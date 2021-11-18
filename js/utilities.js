// generate one number on the board
function generateOneNumber() {
    let randBaord = [];
    let randNumber = 0;
    for(let row = 0; row <= 3; row++){
        for(let col = 0; col <= 3; col++){
            if(board[row][col] === 0) {
                randBaord[randNumber++] = [row, col];
            }
        }
    }

    if (randBaord.length === 0) {
        // No empty cell exists now
        return false;
    } else{
        // Give random th cell value(2 || 4)
        let randRandomCell = Math.random() * randBaord.length;
        randRandomCell = Math.floor(randRandomCell);
        console.log(`randRandomCell = ${randRandomCell}`);

        let randX = randBaord[randRandomCell][0];
        let randY = randBaord[randRandomCell][1];
        console.log(`randX = ${randX}`);
        console.log(`randY = ${randY}`);
        board[randX][randY] = Math.random() <= 0.7 ? 2 : 4;
        console.log(`boardRandomCell = ${board[randX][randY]}`);
        // load number with animation
        showNumberWithAnimation(randX, randY, board[randX][randY]);
    }
}

function getNumberCellBgColor(number) {
    switch (number) {
      case 2:
        return "#88777B";
      case 4:
        return "#8F6699";
      case 8:
        return "#2BD591";
      case 16:
        return "#6655AA";
      case 32:
        return "#4D61B3";
      case 64:
        return "#44A3BB";
      case 128:
        return "#3CC4A9";
      case 256:
        return "#33CC70";
      case 512:
        return "#6DDD22";
      case 1024:
        return "#EE6911";
      case 2048:
        return "#F70909";
  
      //Empty cell
      case 0:
        return "#CDC1B4";
  
      default:
        throw "Number is NotFound 404";
    }
  }
  
  function getNumberCellColor(number) {
    return "#FFFFD5";
}

// test if the board can move to a particular direction, (can do operation or not?)
function canMoveLeft(board) {
    for (let row = 0; row <= 3; row++){
        for(let col = 1; col <= 3; col++){
            if(board[row][col] !== 0){
                if(board[row][col - 1] === 0 || board[row][col - 1] === board[row][col]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for(let row = 0; row <= 3; row++){
        for(let col = 2; col >= 0; col--){
            if(board[row][col] !== 0) {
                if(board[row][col + 1] === 0 || board[row][col + 1] === board[row][col]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board) {
    for(let col = 0; col <= 3; col++){
        for(let row = 1; row <= 3; row++){
            if(board[row][col] !==0) {
                if(board[row - 1][col] === 0 || board[row - 1][col] === board[row][col]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board){
    for(let col = 0; col <= 3; col++){
        for(let row = 2; row >= 0; row--){
            if(board[row][col] !== 0){
                if(board[row + 1][col] === 0 || board[row + 1][col] === board[row][col]){
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlockLeft(row, col1, col, board){
  for(let i = col1 + 1; i < col; i++) {
    if(board[row][i] !== 0){
      return false;
    }
  }
  return true;
}

function noBlockUp(col, row1, row, board) {
  for (let i = row1 + 1; i < row; i++) {
    if (board[i][col] !== 0) {
      return false;
    }
  }
  return true;
}

function noBlockDown(col, row1, row, board) {
  for (let i = row1 - 1; i > row; i--) {
    if (board[i][col] !== 0) {
      return false;
    }
  }
  return true;
}

function noBlockRight(row, col1, col, board) {
  for (let i = col1 - 1; i > col; i--) {
    if (board[row][i] !== 0) {
      return false;
    }
  }
  return true;
}
