function solution(n) {
    let piz=6;
   while(true){
       if(piz%n===0){
           return piz/6;
       }
       piz+=6;
   }
}