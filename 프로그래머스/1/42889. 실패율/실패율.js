function solution(N, stages) {
  const arr = [],
    answer = [];
  for (let i = 1; i <= N; i++) {
    let stageCnt = 0,
      overCnt = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i <= stages[j]) overCnt++;
      if (i === stages[j]) stageCnt++;
    }
    arr.push(overCnt === 0 ? 0 : stageCnt / overCnt);
  }
  const sortedArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < sortedArr.length; i++) {
    answer.push(arr.indexOf(sortedArr[i]) + 1);
    arr.splice(arr.indexOf(sortedArr[i]), 1, -1);
  }
  return answer;
}