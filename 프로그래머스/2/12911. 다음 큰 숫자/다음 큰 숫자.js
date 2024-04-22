function solution(n) {
  let cnt = n.toString(2).split('1').length - 1;
  while (true) {
    n++;
    let newCnt = n.toString(2).split('1').length - 1;
    if (cnt === newCnt) return n;
  }
}