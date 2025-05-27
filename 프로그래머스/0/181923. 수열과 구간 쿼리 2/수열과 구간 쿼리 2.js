function solution(arr, queries) {
  // let answer = [];
  // for (let i = 0; i < queries.length; i++) {
  //   let tmp = [];
  //   for (let j = queries[i][0]; j <= queries[i][1]; j++) {
  //     if (arr[j] > queries[i][2]) tmp.push(arr[j]);
  //   }
  //   if (tmp.length === 0) answer.push(-1);
  //   else answer.push(Math.min(...tmp));
  // }
  // return answer;
    
    let result = [];
    for(let i=0;i<queries.length;i++){
        let tmp=[];
        for(let j=queries[i][0];j<=queries[i][1];j++){
                if(queries[i][2]<arr[j]){
                    tmp.push(arr[j])
                }
            }
        result.push(tmp.length? Math.min(...tmp) : -1);
    }
    return result
}