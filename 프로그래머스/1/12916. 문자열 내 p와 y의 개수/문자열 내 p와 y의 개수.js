function solution(s){
    var answer = true;
    var acnt=0;
    var bcnt=0;
    arr=s.split("");
    for(i=0;i<arr.length;i++){
        if(arr[i]=='p'||arr[i]=='P'){
            acnt+=1;     
        }
        else if(arr[i]=="y"||arr[i]=="Y"){
            bcnt+=1;
        }
    }
    if(acnt==bcnt){
        return answer;
    }
    else{
        return !answer;
    }
}