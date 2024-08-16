function solution(n) {
    let cnt=1;
    let piz=6;
   while(true){
       if(piz%n===0){
           return cnt;
       }
       piz+=6;
       cnt++;
   }
}