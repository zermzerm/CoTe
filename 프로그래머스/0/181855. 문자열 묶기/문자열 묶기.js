function solution(strArr) {
    let cnt= {},sortedCnt=[];
    
    for(i=0;i<strArr.length;i++){
        if(!cnt[strArr[i].length]){
            cnt[strArr[i].length] =1;
        }
        else{
            cnt[strArr[i].length] +=1;
        }
    
    }
    sortedCnt = Object.entries(cnt).sort((a, b) => b[1] - a[1]);
    return sortedCnt[0][1];
}