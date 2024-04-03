const solution = (sides) => {
  const arr = sides.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = arr[1] - arr[0] + 1; i <= arr[1]; i++) {
    cnt++;
  }
  for (let i = arr[1] + arr[0] - 1; i > arr[1]; i--) {
    cnt++;
  }
  return cnt;
};