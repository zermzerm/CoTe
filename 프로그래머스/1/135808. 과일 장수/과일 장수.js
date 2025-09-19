function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    let sum = 0;
    for(let i=m-1;i<score.length;i+=m){
        sum+=score[i]*m; 
    }
    return sum;
    
  // const sortArr = score.sort((a, b) => b - a);
  // let sum = 0;
  // let tmpArr = [];
  // for (let i = 0; i < sortArr.length; i++) {
  //   if (tmpArr.length < m) tmpArr.push(sortArr[i]);
  //   if (tmpArr.length === m) {
  //     sum += Math.min(...tmpArr) * m;
  //     tmpArr = [];
  //   }
  // }
  // return sum;
}