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
    arr.push(overCnt === 0 ? [i, 0] : [i, stageCnt / overCnt]);
  }
  return arr.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}