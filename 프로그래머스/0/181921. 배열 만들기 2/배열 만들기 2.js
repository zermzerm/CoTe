function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i++) {
    if (!String(i).match(/[1,2,3,4,6,7,8,9]/g)) {
      answer.push(i);
    }
  }
  return answer.length ? answer : [-1];
}