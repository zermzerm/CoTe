function factorial(num){
    return num === 0 ? 1 : num * factorial(num-1);
}

function solution(balls, share) {
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)))
    // let n = 1, nMinusM =1,m=1;
    // if(balls===share)return 1;
    // for(let i=1;i<=balls;i++){
    //     n *=i;
    // }
    // for(let i=1;i<=balls-share;i++){
    //     nMinusM *=i;
    // }
    // for(let i=1;i<=share;i++){
    //     m*=i
    // }
    // return Math.round(n/(nMinusM*m))
}