function solution(n) {
    let sum =0;
    for(let i=1;i<=n;i++){
        n%2===1 ? (i%2===1 ? sum+=i : "") : (i%2===0 ? sum+=i**2 : "");
    }
    return sum;
}