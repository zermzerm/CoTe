function solution(s) {
   let arr = s.split("").sort();
    let obj = {};
    let answer = ""
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1;
            answer = answer.replace(arr[i],"");
        }
        else{
            obj[arr[i]] = 1;
            answer +=arr[i];
        } 
        
    }
    return answer
}