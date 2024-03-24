const solution = (d, budget) => {
  let cnt = 0,
    sum = 0;
  let arr = d.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > budget) return cnt;
    if (sum === budget) {
      cnt++;
      return cnt;
    }
    cnt++;
  }
    return cnt;
};