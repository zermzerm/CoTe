function solution(n, m) {
  let answer = [];
  let nArr = [],
    mArr = [];
  if (m % n === 0) {
    answer.push(n, m);
    return answer;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) nArr.push(i);
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) mArr.push(i);
  }
  nArr.sort((a, b) => b - a);
  for (let i = 0; i < nArr.length; i++) {
    if (mArr.includes(nArr[i])) {
      answer.push(nArr[i]);
      break;
    }
  }
  answer.push((((n / answer[0]) * m) / answer[0]) * answer[0]);
  return answer;
}