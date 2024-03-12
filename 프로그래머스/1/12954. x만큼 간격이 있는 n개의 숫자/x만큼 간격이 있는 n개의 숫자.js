function solution(x, n) {
    var answer = [];
    for(i=1;i<n+1;i++){
        answer.push(i*x);
    }
    return answer;
}