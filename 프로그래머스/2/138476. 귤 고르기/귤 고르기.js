function solution(k, tangerine) {
    // let obj = {}
    // for(let i=0;i<tangerine.length;i++){
    //     obj[tangerine[i]] ? obj[tangerine[i]]++ : obj[tangerine[i]]=1
    // }
    // const sortedEntries = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    // let tmp =[]
    // for(let i=0;i<sortedEntries.length;i++){
    //     for(let j=0;j<sortedEntries[i][1];j++){
    //         if(tmp.length===k){
    //             let answer = new Set(tmp);
    //             return answer.size;
    //         }
    //         else{
    //             tmp.push(sortedEntries[i])
    //         }
    //     }
    // }
    // let answer = new Set(tmp);
    // return answer.size;
    
    let obj = {};
    let cnt=0;
    for(let i=0;i<tangerine.length;i++){
        obj[tangerine[i]] ? obj[tangerine[i]]++ : obj[tangerine[i]]=1;
    }
    let arr = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    for(let i=0;i<arr.length;i++){
        k-=arr[i][1];
        cnt++;
        if(k<=0) return cnt;
    }
    return cnt;
}