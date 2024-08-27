function solution(arr, flag) {
   const x = [];
    for(let i=0;i<flag.length;i++){
        flag[i] ? x.push(...Array.from({length:arr[i]*2},()=>arr[i])) : x.splice(-arr[i])
    }  
    return x
}