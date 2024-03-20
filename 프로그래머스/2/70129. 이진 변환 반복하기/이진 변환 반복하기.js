function solution(s) {
  let cnt = 0;
  let zeroCnt = 0;
  while (!(s === "1")) {
    while (s.includes("0")) {
      s = s.replace("0", "");
      zeroCnt++;
    }
    s = s.length.toString(2);
    cnt++;
  }
  return [cnt, zeroCnt];
}