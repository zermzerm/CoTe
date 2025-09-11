function solution(clothes) {
//   let count = 1;
//   const result = new Map();

//   clothes.map((val) =>
//     result.has(val[1])
//       ? result.set(val[1], result.get(val[1]) + 1)
//       : result.set(val[1], 1)
//   );

//   for (let [key, val] of result) {
//     count *= val + 1;
//   }

//   return count - 1;
    
    const obj = {};
    for(let i=0;i<clothes.length;i++) obj[clothes[i][1]] ? obj[clothes[i][1]]++ : obj[clothes[i][1]] = 1 
    return Object.values(obj).reduce((acc,cur)=>acc*(cur+1),1)-1;
}