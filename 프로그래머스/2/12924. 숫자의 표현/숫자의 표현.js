function solution(n) {
  let cnt = 1;
  let sum = 0;
  let idx = 1;
  for (let i = 1; i < Math.ceil(n / 1); i++) {
    sum += i;
    if (sum === n) {
      cnt++;
      i = idx;
      idx++;
      sum = 0;
    }
    if (sum > n) {
      i = idx;
      idx++;
      sum = 0;
    }
  }
  return cnt;
}