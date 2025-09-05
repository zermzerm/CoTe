// function measure(number) {
//   let cnt = 0;
//   for (let i = 1; i <= number**0.5; i++) {
//     if (number % i === 0) {
//       cnt++;
//       if (i != number / i) cnt++;
//     }
//   }
//   return cnt;
// }

function measure (num){
    let cnt=0;
    for(let i=1;i<=num**0.5;i++){
        if(num%i===0){
             cnt++;
            if(i!==num/i) cnt++;
        }
    }
    return cnt;
}

function solution(number, limit, power) {
  // let result = 0;
  // for (let i = 1; i <= number; i++) {
  //   if (measure(i) > limit) result += power;
  //   else result += measure(i);
  // }
  // return result;
    
    let arr = 0;
    for(let i=1;i<=number;i++){
        arr+=measure(i)>limit ? power : measure(i);
    }
    return arr;
}