function solution(n) {
  // if(n===1) return 1;
  // let arr = [1,1,2];
  // for(let i = 2;i < n; i++){
  //   arr.push((arr[i-1]+arr[i])%1234567);
  // }
  // return arr.at(-1)
    
  // 피보나치 수열
    let dp=[];
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=n;i++){
        dp[i] = (dp[i-2]+dp[i-1])%1234567;
    }
    return dp[n]
}