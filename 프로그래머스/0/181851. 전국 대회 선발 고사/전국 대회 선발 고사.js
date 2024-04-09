function solution(rank, attendance) {
  const answer = [];
  for (let i = 1; i <= rank.length; i++) {
    if (answer.length === 3) break;
    if (attendance[rank.indexOf(i)]) answer.push(rank.indexOf(i));
  }
  return answer[0] * 10000 + answer[1] * 100 + answer[2];
}