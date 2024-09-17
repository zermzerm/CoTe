function v(a,b){
    return a+b>=1 ? true : false
}

function n(a,b){
    return a*b===1 ? true : false
}

function solution(x1, x2, x3, x4) {
    return n(v(x1,x2),v(x3,x4))
}