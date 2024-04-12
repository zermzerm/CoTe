function solution(score) {
  let arr = score.map((el) => (el[0] + el[1]) / 2);
  let sortArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < sortArr.length; i++) {
    while (arr.indexOf(sortArr[i]) !== -1) {
      arr[arr.indexOf(sortArr[i])] = String(i + 1);
    }
  }
  return arr.map((el) => +el);
}