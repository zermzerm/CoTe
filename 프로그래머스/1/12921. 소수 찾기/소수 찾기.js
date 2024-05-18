function solution(n) {
  let arr = new Array(n+1).fill(true);
  arr[0] = arr[1] = false;
  let answer = [];
  for (let i = 2; i <= n; i++) {
    if (arr[i]) answer.push(i);
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = false;
    }
  }
  return answer.length;
}