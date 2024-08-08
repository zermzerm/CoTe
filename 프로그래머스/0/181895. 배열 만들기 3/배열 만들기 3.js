function solution(arr, intervals) {
    const answer =[];
   intervals.map((el)=>arr.forEach((i,idx)=>idx>=el[0]&&idx<=el[1] ? answer.push(i) : ""))
   return answer 
}