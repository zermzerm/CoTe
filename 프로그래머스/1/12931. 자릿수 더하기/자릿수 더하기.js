function solution(n)
{
    var answer = 0;
    n=String(n);
    arr=n.split("");
    for(i=0;i<arr.length;i++){
        answer+=parseInt(arr[i]);
    }
    return answer;
}