function solution(s) {
    let compare = "", x = "", answer= 0;
    for(let i=0;i<s.length;i++){
        if(x.length===0||s[i]===x[0]) x+=s[i];
        else {
            compare+=s[i];
            if(x.length===compare.length) answer++, x="", compare="";
        }
    }
    if(x!=="") answer++
    return answer
}