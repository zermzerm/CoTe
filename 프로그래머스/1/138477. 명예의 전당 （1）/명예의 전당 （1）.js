function solution(k, score) {
//   const arr = [];
//   const result = [];
//   for (let i = 0; i < score.length; i++) {
//     if (arr.length <k) arr.push(score[i]);
//     else {
//       arr.sort((a, b) => a - b);
//       if (arr[0] < score[i]) arr.splice(0, 1, score[i]);
//     }
    
//     result.push(Math.min(...arr));
//   }
//   return result;
    
    const arr = [score[0]];
    let lastScore = score[0];
    const result = [score[0]];
    for(let i =1;i<score.length;i++){
        if(arr.length<k){
             arr.push(score[i]);
           arr.sort((a,b)=>b-a);
            lastScore = arr.at(-1);
        }
        else{
            if(score[i]>lastScore) {
             arr.pop();
           arr.push(score[i]);
           arr.sort((a,b)=>b-a);
           lastScore = arr.at(-1);
       }
        }
       
        result.push(lastScore);
    }
    return result
}