function solution(arr, k) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (answer.length === k) return answer;
    if (answer.indexOf(arr[i]) === -1) {
      answer.push(arr[i]);
    }
  }
  if (answer.length !== k) {
    answer.push(...Array(k - answer.length).fill(-1));
  }
  return answer;
}