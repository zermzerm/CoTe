function solution(numlist, n) {
    numlist.sort((a,b)=>a-b);
  const arr = numlist.map((el) => el - n);
  let sortArr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = 0; i < sortArr.length; i++) {
    if (Math.abs(sortArr[i]) === Math.abs(sortArr[i + 1])) {
      [sortArr[i], sortArr[i + 1]] = [sortArr[i + 1], sortArr[i]];
      i++;
    }
  }
  return sortArr.map((el) => el + n);
}