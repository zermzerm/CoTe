function solution(array) {
    let cnt = 0;
    for(let i=0; i<array.length; i++){
        cnt += String(array[i]).split("").filter((el)=>el==="7").length;
        
    }
    return cnt;
}