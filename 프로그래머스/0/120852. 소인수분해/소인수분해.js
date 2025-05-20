// const solution = (n) => {
//   let answer = new Set();
//   let index = 2;
//   while (n != 1) {
//     if (n % index === 0) {
//       n /=  index;
//       answer.add(index);
//     } else {
//       index++;
//     }
//   }
//   return [...answer];
// };

function solution(n){
    let answer=[];
    for(let i=2;i<=n;i++){
        while(n%i===0){
            if(!answer.includes(i)) answer.push(i);
            n=n/i;
        }
    }
    return answer;
}