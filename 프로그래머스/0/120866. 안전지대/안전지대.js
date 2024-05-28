function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = i - 1; k <= i + 1; k++) {
          if (k < 0 || k >= board.length) continue;
          for (let p = j - 1; p <= j + 1; p++) {
            if (p < 0 || p >= board.length) continue;
            if (board[k][p] === 0) board[k][p] = 2;
          }
        }
      }
    }
  }
  return board.flat().filter((el) => el === 0).length;
}