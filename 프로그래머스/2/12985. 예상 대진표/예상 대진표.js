function solution(n, A, B) {
  // let cnt = 1;
  // if (a > b) [a, b] = [b, a];
  // while (true) {
  //   if (a % 2 === 1 && b - a === 1) break;
  //   a = Math.ceil(a / 2);
  //   b = Math.ceil(b / 2);
  //   cnt++;
  // }
  // return cnt;
    let cnt = 0;
    while(A!==B){
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        cnt++;
    }
    return cnt;
}