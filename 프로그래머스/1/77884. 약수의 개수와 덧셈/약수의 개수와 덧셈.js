function solution(left, right) {
  return Array.from(Array(right - left + 1), (_, index) => index + left).reduce((acc, cur) => (Number.isInteger(cur ** 0.5) ? acc - cur : acc + cur),0);
}