function combination(arr, n) {
  let cnt = 0;
  function backtrack(tmp, start) {
    if (tmp.length === n) {
      let sum = tmp.reduce((acc, cur) => acc + cur, 0);
      if (prime(sum)) cnt++;
      return;
    }
    for (let i = start; i < arr.length; i++) {
      tmp.push(arr[i]);
      backtrack(tmp, i + 1);
      tmp.pop();
    }
  }
  backtrack([], 0);
  return cnt;
}

function prime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  return combination(nums, 3);
}