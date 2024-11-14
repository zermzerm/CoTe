function solution(s) {
    let compare = "";
    let x = "";
    let answer= [];
    for(let i=0;i<s.length;i++){
        if(x.length===0) {
            x+=s[i];
        }
        else if(s[i]===x[0]) x+=s[i];
        else {
            compare+=s[i];
            if(x.length===compare.length){
                answer.push(1);
                x="";
                compare="";
            }
        }
        // console.log("x =",x,"compare =",compare,"i =",i)
    }
    if(x!=="") answer.push(1)
    return answer.length;
}