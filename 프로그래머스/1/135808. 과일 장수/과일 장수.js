function solution(k,m,score){
    var answer=0;
    var arr = score.sort();
    if(score.length%m!==-0){
        for(i=0;i<score.length%m;i++){
            arr.splice(i,1);
            i--;
        }
    }
    for(i=0;i<score.length;i++){
        answer+=arr[i]*m;
        i=i+m-1;
    }
    return answer;
}