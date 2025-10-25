function solution(n, k) {
    let newNum = ""+n.toString(k);
    let tmp = '';
    let answer = 0;
    for(let i=0;i<newNum.length;i++){
        if(newNum[i]!=="0"){
            tmp+=newNum[i];
        }
        else if(newNum[i]==="0"&&tmp!==""){
            if(isPrime(+tmp)) answer++;
            tmp = "";
        }
    }
    if(tmp!==""&&isPrime(+tmp)) answer++;
    return answer
    
    // let answer =0;
    // const alterN = n.toString(k).split("0").filter((el)=>el!=='1'&&el!=='').map((el)=>+el)
    // return alterN.filter((el)=>primeCheck(el)).length;
}

function isPrime(n){
    if(n===1) return false;
    for(let i=2;i<=n**0.5;i++){
        if(n%i===0) return false;
    }
    return true;
}

// function primeCheck(n){
//     for(let i=2;i<=n**0.5;i++){
//         if(n%i===0) return false;
//     }
//     return true;
// }