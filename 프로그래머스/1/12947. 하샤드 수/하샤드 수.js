function solution(x) {
    var n=0;
    var arr=(x+"").split("");
    for(i=0;i<arr.length;i++){
        n +=parseInt(arr[i]);
    }
    return x%n===0;
}