const compare = (k, plus, board, answer) => {
  if (plus) {
    if (answer[k] <= Math.floor(board[k] / 2) - 1) answer[k]++;
  } else {
    if (answer[k] >= -(Math.floor(board[k] / 2) - 1)) answer[k]--;
  }
};

const solution = (keyinput, board) => {
  const answer = [0, 0];
  keyinput.forEach((el) => {
    switch (el) {
      case 'left':
        compare(0, false, board, answer);
        break;
      case 'right':
        compare(0, true, board, answer);
        break;
      case 'up':
        compare(1, true, board, answer);
        break;
      case 'down':
        compare(1, false, board, answer);
        break;
    }
  });
  return answer;
};