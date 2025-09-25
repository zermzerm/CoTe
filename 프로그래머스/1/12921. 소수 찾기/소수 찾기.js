function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<n; j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

// function solution(n) {
//     let cnt = 0;
//     function isPrime(num){
//         for(let i=2;i<=num**0.5;i++){
//             if(num%i===0) return false
//         }
//         return true;
//     }
//     for(let i=2;i<=n;i++){
//         if(isPrime(i)) cnt++;
//     }
//     return cnt;
    
    
//   // let arr = new Array(n+1).fill(true);
//   // arr[0] = arr[1] = false;
//   // let answer = [];
//   // for (let i = 2; i <= n; i++) {
//   //   if (arr[i]) answer.push(i);
//   //   for (let j = i * 2; j <= n; j += i) {
//   //     arr[j] = false;
//   //   }
//   // }
//   // return answer.length;
// }