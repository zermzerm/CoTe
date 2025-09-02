function solution(n) {
  // let cnt = 0;
  // while (n !== 0) {
  //   if (n % 2 !== 0) {
  //     n--;
  //     cnt++;
  //   } else {
  //     n = n / 2;
  //   }
  // }
    
  // return cnt;
    // let cnt=0;
    // while(n!==0){
    //     if(n%2===0) n /= 2;
    //     else{
    //         n--;
    //         cnt++;
    //     }
    // }
    // return cnt;
    
    // return     (n.toString(2).match(/1/g).length);
    
    let cnt=0;
    while(n!==0){
        cnt += n%2;
        n = Math.floor(n/2);
    }
    return cnt;
}