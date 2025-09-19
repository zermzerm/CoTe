function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    let tmp = [];
    let sum = 0;
    for(let i=0;i<score.length;i++){
        if(tmp.length<m) tmp.push(score[i])
        if(tmp.length===m){
            sum+=Math.min(...tmp)*m;
            tmp=[];       
            }
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