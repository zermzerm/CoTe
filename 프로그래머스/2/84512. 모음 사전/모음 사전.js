function solution(word) {
    let alpha = ["A","E","I","O","U"];
    let cnt = [781,156,31,6,1];
    let answer = 0;
    for(let i=0;i<word.length;i++){
        answer += alpha.indexOf(word[i])*cnt[i]+1;
        //+1하는 이유는 앞에 A AA AAA AAAA 이런 애들일 때를 위해
    }
    return answer;
}
