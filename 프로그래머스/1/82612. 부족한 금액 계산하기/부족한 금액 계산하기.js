// const solution = (price, money, count) => {
//     let sum=0;
//   for (let i = 1; i <= count; i++) {
//     sum += price*i;
//   }
//   return sum > money ? sum-money : 0;
// };

const solution = (price, money, count) =>{
    let sum = 0;
    for(let i=1;i<=count;i++){
        sum +=price*i;
    }
    return sum > money ? sum-money : 0
}