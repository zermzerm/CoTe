function solution(s) {
  let cnt = 0;
  let zeroCnt = 0;
  while (!(s === "1")) {
    if (s.match(/0/g)) zeroCnt += s.match(/0/g).length;
    s = s.replace(/0/g, "").length.toString(2);
    cnt++;
  }
  return [cnt, zeroCnt];
}