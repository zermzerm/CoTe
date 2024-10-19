function solution(n, k) {
    let answer =0;
    const alterN = n.toString(k).split("0").filter((el)=>el!=='1'&&el!=='').map((el)=>+el)
    // console.log(alterN)
    for(let i=0;i<alterN.length;i++){
        if(primeCheck(alterN[i])) answer++;
    }
    return answer;
}

function primeCheck(n){
    for(let i=2;i<=n**0.5;i++){
        if(n%i===0) return false;
    }
    return true;
}