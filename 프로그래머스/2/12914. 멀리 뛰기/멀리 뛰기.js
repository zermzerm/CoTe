function solution(n) {
  if(n===1) return 1;
  let arr = [1,1,2];
  for(let i = 2;i < n; i++){
    arr.push((arr[i-1]+arr[i])%1234567);
  }
  return arr.at(-1)
}