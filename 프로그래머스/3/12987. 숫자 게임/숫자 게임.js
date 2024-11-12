function solution(A, B) {
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    let cnt=0;
    let checkIdx=0;
    // console.log(A,B)
    for(let i=0;i<B.length;i++){
        for(let j=checkIdx;j<A.length;j++){
            if(B[i]>A[j]){
                cnt++;
                checkIdx=j+1;
                break;
            }
        }
    }
    return cnt;
}