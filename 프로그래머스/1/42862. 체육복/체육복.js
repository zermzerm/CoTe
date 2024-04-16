function solution(n, lost, reserve) {
  let cnt = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(reserve.indexOf(reserve[i]), 1);
      i--;
    }
  }
  console.log(lost, reserve);
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (Math.abs(lost[i] - reserve[j]) === 1) {
        reserve.splice(j, 1);
        cnt++;
        break;
      }
    }
  }
  return n - lost.length + cnt;
}