const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAY = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  // let mon = b;
  // for (let i = 0; i < a - 1; i++) {
  //   mon += MONTH[i];
  // }
  // return mon % 7 === 0 ? DAY.at(-1) : DAY[(mon % 7) - 1];
    return DAY.at((MONTH.reduce((acc,cur,idx)=>idx<a-1 ? acc+cur : acc,0)+b)%7-1)
    
}