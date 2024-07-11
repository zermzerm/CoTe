function solution(arr) {
    const stk =[arr[0]];
    for(let i=1; i<arr.length;i++){
            stk.at(-1) === arr[i] ? stk.pop() : stk.push(arr[i])    
    }
    return stk.length!==0 ? stk : [-1]
}