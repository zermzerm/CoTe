function solution(A,B){
    var arrA=[],arrB=[],answer=0;
    arrA=A.sort((a,b)=>a-b);
    arrB=B.sort((a,b)=>b-a);
    for(i in arrA){
        answer+=arrA[i]*arrB[i];
    }
    return answer;
}