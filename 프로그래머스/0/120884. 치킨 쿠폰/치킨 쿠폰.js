function solution(chicken) {
    let answer = 0;
    while(true){
        let cnt=parseInt(chicken/10);
        if(cnt===0)break;
        answer+=cnt;
        chicken=cnt+(chicken%10);
    }
    return answer;
}