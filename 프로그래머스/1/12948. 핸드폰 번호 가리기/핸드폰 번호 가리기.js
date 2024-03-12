function solution(phone_number){
    var arr = phone_number.split("");
    var answer=[]
    for(i=0;i<arr.length;i++){
        if(arr.length-4-i>0){
            arr.splice(i,1,"*")
        }
    }
    return arr.join("");
}