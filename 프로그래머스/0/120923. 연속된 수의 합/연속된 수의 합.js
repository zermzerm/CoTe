function solution(num, total) {
    let sumArr = [];
    let current = total+Math.floor(num/2);
    let sum = 0;
    let cnt = 1;
    if(num===1) return [total];
    while(true){
        sum+=current;
        sumArr.push(current)
        if(sumArr.length===num && sum===total) return sumArr.sort((a,b)=>a-b);
        if(sumArr.length>num){
            current = total+Math.floor(num/2) -cnt;
            sum = 0;
            sumArr = [];
            cnt++;
            continue;
        }
        current--;
    }
    // let arr = [];
    // let zeroArr=[];
    // if(num===1){
    //     let answer=[];
    //     answer.push(total);
    //     return answer;
    // }
    // else if(total===0){
    //     let zeroScope = Math.floor(num/2);
    //     for(let i = -zeroScope;i<zeroScope+1;i++){
    //         zeroArr.push(i);
    //     }
    //     return zeroArr;
    // }
    // else if(num===total*2){
    //     let answer=[];
    //     for(let i=-total+1;i<total+1;i++){
    //         answer.push(i);
    //     }
    //     return answer;
    // }
    // else{
    // let scope =  Math.ceil(total/2);
    // for(let i=-scope;i<scope+1;i++){
    //     arr.push(i);
    // }
    // for(let i=0; i<arr.length;i++){
    //     let sum=0;
    //     let answer=[];
    //     if(i+num<=arr.length){
    //         for(let j=i;j<i+num;j++){
    //             sum+=arr[j];
    //             answer.push(arr[j]);
    //         }   
    //     }
    //     if(sum===total){
    //         return answer;
    //     }
    // }
    // }
}