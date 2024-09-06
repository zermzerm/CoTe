function solution(myString, pat) {
    let cnt =0;
    while(myString.includes(pat)){
        if(myString.includes(pat)) cnt++
        myString=myString.substr(myString.indexOf(pat)+1)
    }
    return cnt
}