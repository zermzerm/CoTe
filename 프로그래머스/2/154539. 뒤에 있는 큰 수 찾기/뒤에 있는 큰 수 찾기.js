function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = [];
    for(let i=0;i<numbers.length;i++){
        while(stack.length>0&&numbers[stack[stack.length-1]]<numbers[i]){
            const idx = stack.pop();
            answer[idx] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
    
    
//     const n = numbers.length;
//     const answer = Array(n).fill(-1);
//     const stack = [];

//     for (let i = 0; i < n; i++) {
//         // 스택의 맨 위 값이 현재 값보다 작으면 "뒷 큰수" 조건 성립
//         while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
//             const idx = stack.pop();
//             answer[idx] = numbers[i];
//         }
//         stack.push(i);
//     }
//     return answer;
}

// function solution(numbers) {
//     let answer =[];
//     for(let i=0;i<numbers.length;i++){
//         let tmp = 0;
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[i]<numbers[j]) {
//                 tmp = numbers[j];
//                 break;
//             }
//         }
//         tmp !==0 ? answer.push(tmp) : answer.push(-1);
//     }
//     return answer
// }