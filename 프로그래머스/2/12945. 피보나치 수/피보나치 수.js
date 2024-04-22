function solution(n) {
    var answer = 0;
    var arr=[0,1];
    if(n==0){
        return 0;
    }
    for(i=2;i<n+1;i++){
        arr.push((arr[i-2]+arr[i-1])%1234567);
    }
    return arr[arr.length-1];
}