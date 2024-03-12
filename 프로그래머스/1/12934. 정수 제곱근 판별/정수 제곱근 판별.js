function solution(n) {
    var answer = 0;
    var arr=[];
    answer=n**0.5;
    if(Number.isInteger(answer)){
        return (answer+1)**2;
    }
    else{
        return -1;
    }
}