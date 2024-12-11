function solution(order) {
    const answer = [];
    const stack = [];
    let cnt = 0;
    
    for (let i = 1; i <= order.length; i++) {
        if (i === order[cnt]) {
            answer.push(i);
            cnt++;
        } else {
            stack.push(i);
        }
        // 스택의 마지막 요소가 현재 순서(order[cnt])와 같다면 처리
        while (stack.length > 0 && stack[stack.length - 1] === order[cnt]) {
            answer.push(stack.pop());
            cnt++;
        }
    }
    return answer.length;
}