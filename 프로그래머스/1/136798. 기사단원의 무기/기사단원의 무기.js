function measure(number) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      cnt++;
      if (i != number / i) cnt++;
    }
  }
  return cnt;
}

function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    if (measure(i) > limit) result += power;
    else result += measure(i);
  }
  return result;
}