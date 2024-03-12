function solution(a, b) {
    var answer = 0;
    if(a<b){
        for(i=a;i<b+1;i++){
            answer+=i;
        }
    }
    else if(a>b){
        for(i=b;i<a+1;i++){
            answer+=i;
        }
    }
    else{
        answer+=a;
    }
    return answer;
}