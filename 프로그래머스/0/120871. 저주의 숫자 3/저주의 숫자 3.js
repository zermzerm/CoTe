function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    while (String(i + cnt).includes(3) || (i + cnt) % 3 === 0) cnt++;
  }
  return cnt + n;
}