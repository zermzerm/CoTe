// const solution = (s) => {
//   const small = [],
//     big = [];
//   for (let i = 0; i < s.length; i++) {
//     s[i] === s[i].toUpperCase() ? big.push(s[i]) : small.push(s[i]);
//   }
//   return small.sort().reverse().join("") + big.sort().reverse().join("");
// };

function solution(s){
//     let low = [];
//     let high = [];
//     for(let i=0;i<s.length;i++){
//         s[i]===s[i].toLowerCase() ? low.push(s[i]) : high.push(s[i]);
//     }
//     return low.sort().reverse().join("")+high.sort().reverse().join("");
    return s.split("").sort().reverse().join("")
}