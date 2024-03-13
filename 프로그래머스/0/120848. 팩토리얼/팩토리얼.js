function solution(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
      if(sum===n) return i;
    if (sum > n) return i - 1;
  }
}