function solution(arr) {
    if(!arr.includes(2)) return [-1];
    let answer = arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1)
    
    return answer
}