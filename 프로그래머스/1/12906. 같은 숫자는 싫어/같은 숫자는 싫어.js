function solution(arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
// answer.push(arr[i])
//     }
//   }
//   return answer;
    
    // let stack = [arr[0]];
    // for(let i=1;i<arr.length;i++){
    //     let last = stack.pop();
    //     stack.push(last);
    //     if(last!==arr[i]){
    //         stack.push(arr[i]);
    //     }
    // }
    // return stack
    
    return arr.filter((el,idx)=>el!==arr[idx+1]);
}