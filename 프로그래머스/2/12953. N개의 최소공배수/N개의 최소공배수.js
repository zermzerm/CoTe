function solution(arr) {
  let answer = 1;
  let allArr = [];
  arr.sort((a, b) => a - b);
  let cntArr = new Set();
  for (let i = 0; i < arr.length; i++) {
    let tmp = [];
    let tmpNumber = arr[i];
    for (let j = 2; j <= arr[i]; j++) {
      while (Number.isInteger(tmpNumber / j)) {
        tmp.push(j);
        tmpNumber /= j;
        cntArr.add(j);
      }
      if (tmpNumber === 1) break;
    }
    allArr.push(tmp);
  }
  let cntTmpArr = [...cntArr];
  let cnt = [];
  for (let i = 0; i < cntTmpArr.length; i++) {
    let tmp = [];
    for (let j = 0; j < allArr.length; j++) {
      tmp.push(allArr[j].filter((el) => el === cntTmpArr[i]).length);
    }
    cnt.push(Math.max(...tmp));
  }
  for (let i = 0; i < cnt.length; i++) {
    answer *= Math.pow(cntTmpArr[i], cnt[i]);
  }
  return answer;
}