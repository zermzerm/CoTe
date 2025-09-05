function solution(citations) {
    // let cnt=0;
    // while(true){
    //     let tmpCnt=0;
    //     for(let i=0;i<citations.length;i++){
    //         if(citations[i]>=cnt) tmpCnt++;
    //     }
    //     let lowCnt = citations.filter((el)=>el<cnt).length;
    //     if(cnt>tmpCnt) break;
    //     cnt++;
    // }
    // return cnt-1;
    
    
    let cnt = 0;
    for(let i=0;i<=Math.max(...citations);i++){
        let compare = citations.filter((el)=>el>=i).length;
        if(i<=compare) cnt = i
    }
    return cnt;
}
