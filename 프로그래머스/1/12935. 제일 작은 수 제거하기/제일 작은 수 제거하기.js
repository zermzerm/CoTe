function solution(arr) {
    // if(arr.length ===1) return [-1];
    // var tmpArr = [...arr].sort((a,b)=>a-b);
    // var answer = arr.filter((el)=>el!==tmpArr[0])
    // return answer;
    
    if(arr.length===1) return [-1];
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr
}