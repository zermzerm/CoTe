function solution(arr, k) {
  // let answer = [arr[0]];
  // for (let i = 1; i < arr.length; i++) {
  //   if (answer.length === k) return answer;
  //   if (answer.indexOf(arr[i]) === -1) {
  //     answer.push(arr[i]);
  //   }
  // }
  // if (answer.length !== k) {
  //   answer.push(...Array(k - answer.length).fill(-1));
  // }
  // return answer;
    
    let result = [];
    while(result.length!==k){
        for(let i=0;i<arr.length;i++){
            if(!result.includes(arr[i])) result.push(arr[i])
            if(result.length===k) return result;
        }
        if(result.length<k) result.push(-1)
    }
    return result
}