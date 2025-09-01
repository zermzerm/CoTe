const solution = (a, b, n) => {
  // let answer = 0;
  // while (n >= 2) {
  //   if (n < a) return answer;
  //   const returnCoke = Math.floor(n / a) * b;
  //   answer += returnCoke;
  //   n = returnCoke + (n % a);
  // }
  // return answer;
    
    let cnt = 0;  
    while(n>=a){
        const share = Math.floor(n/a)*b;
        cnt+=share;
        n=share + (n%a);
    }
    return cnt;
};