function solution(n) {
    var answer = [];
    for(let i=0;i<n;i++){
        let tmpArr = Array(n).fill(0)
        tmpArr[i]=1;
        answer.push(tmpArr)
    }
    return answer;
}