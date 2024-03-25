const solution = (arr) => {
  let answer = [...arr];
  let n = 1;
  let cnt = 0;
  while (arr.length > n) {
    n *= 2;
    cnt++;
  }
  for (let i = 0; i < 2 ** cnt - arr.length; i++) {
    answer.push(0);
  }
  return answer;
};