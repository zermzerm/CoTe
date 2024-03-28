const solution = (nums) => {
  let cnt = 0;
  let arr = [...new Set(nums)];
  for (let i = 0; i < nums.length / 2; i++) {
    arr[i] && cnt++;
  }
  return cnt;
};