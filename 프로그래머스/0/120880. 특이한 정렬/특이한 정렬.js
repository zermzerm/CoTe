function solution(numlist, n) {
    let answer = [];
    let arr = [...numlist];
    let arr2 = [...numlist].sort((a,b)=>b-a);
    arr.forEach((el,i)=>arr[i]=Math.abs(el-n));
    arr.sort((a,b)=>a-b);
    arr.forEach((arr1el)=>{
        arr2.forEach((arr2el)=>{
            if(Math.abs(arr2el-n)==arr1el)answer.push(arr2el);
        })
    })
    return [...new Set(answer)];
}