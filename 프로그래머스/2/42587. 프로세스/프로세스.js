function solution(priorities, location) {
    const idxArr = priorities.map((el,idx)=>[el,idx])
    const answer = idxArr[location];
    const answerArr = [];
    while(idxArr.length>0){
        const cur = idxArr.shift();
        const hasPriority = idxArr.some((el)=>el[0]>cur[0]);
        if(hasPriority) idxArr.push(cur)
        else answerArr.push(cur)
    }
    return answerArr.indexOf(answer)+1
    // console.log(answerArr.indexOf(priorities[location]))
   
    
    // const arr =  priorities.map((el,idx)=>[el,idx]);
    // const answerIdx = arr[location];
    // let cnt =1;
    // while(priorities.length>0){
    //     let tmp = priorities.shift();
    //     let hasMax = priorities.some((el)=>el>tmp);
    //     if(hasMax){
    //         priorities.push(tmp);
    //         tmp = arr.shift();
    //         arr.push(tmp);
    //     }
    //     else{
    //         if(arr[0][1]===location) return cnt;
    //         else{
    //             arr.splice(0,1);
    //             cnt++;
    //         }
    //     }
    // }
}