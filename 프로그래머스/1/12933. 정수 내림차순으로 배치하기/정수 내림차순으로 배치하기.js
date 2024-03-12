function solution(n) {
    var arr=String(n).split("");
    arr.sort((a,b)=>b-a);
    return +arr.join("");
}