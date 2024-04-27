function solution(k, score) {
  const arr = [];
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (arr.length <k) arr.push(score[i]);
    else {
      arr.sort((a, b) => a - b);
      if (arr[0] < score[i]) arr.splice(0, 1, score[i]);
    }
    arr.sort((a, b) => a - b);
    result.push(arr[0]);
  }
  return result;
}