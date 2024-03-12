function solution(n) {
    var answer = [];
    n=String(n);
    answer=n.split("");
    answer.reverse();
    for(i=0;i<answer.length;i++){
        answer[i]=parseInt(answer[i]);
    }
    return answer;
}