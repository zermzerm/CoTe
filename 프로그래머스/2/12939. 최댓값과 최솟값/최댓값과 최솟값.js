function solution(s) {
    var answer = '';
    arr=[];
    arr=s.split(" ");
    arr.sort(function(a,b){
        return a-b;
    });
    answer=arr[0]+" "+arr[arr.length-1];
    return answer;
}