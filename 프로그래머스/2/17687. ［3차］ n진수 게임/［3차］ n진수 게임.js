function solution(n, t, m, p) {
    let tmp ="",answer="";
    for(let i=0;i<=t*m;i++){
        tmp += i.toString(n).toUpperCase()
    }
    let tmpArr=tmp.split("")
    // console.log(tmpArr)
    let cnt=0;
    while(cnt<t*m){
        if(cnt%m===p-1){
            answer += tmpArr[cnt];
        }
        cnt++
    }
    return answer
}