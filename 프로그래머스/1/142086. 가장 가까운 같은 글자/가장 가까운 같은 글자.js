function solution(s){
    var answer=[],arr=[],end=[];
    answer=s.split("");
    for(i=0;i<answer.length;i++){
        if(arr.filter(v=>answer[i]===v).length>0){
            var cnt=[];
            arr.push(answer[i]);
            for(j=0;j<arr.length;j++){
                if(arr[j]===answer[i]){
                    cnt.push(j);
                }
            }
            cnt.sort((a,b)=>b-a);
            end.push(cnt[0]-cnt[1]);
            
        }
        else{
            arr.push(answer[i]);
            end.push(-1);
        }
    }
    return end;
}