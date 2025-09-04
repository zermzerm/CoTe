function solution(s){
    // const obj = {']' : '[',')' : '(','}' : '{'};
    // let cnt =0;
    // for(let j=0;j<s.length;j++){
    //     const stack = [];
    //     for(let i=0;i<s.length;i++){
    //         if(s[i]===']' || s[i]==='}' || s[i]===')'){
    //             let popString = stack.at(-1);
    //             if(obj[s[i]]===popString) {
    //                 stack.pop();
    //             }
    //             else {
    //                 stack.push(-1);
    //                 break;
    //             }
    //         }
    //         else stack.push(s[i])
    //     }
    //     if(stack.length===0) cnt++;
    //     s = s[s.length - 1] + s.slice(0,-1) 
    // }
    // return cnt;
    
    let obj = {'(' : ')', '{':'}', "[":']'}
    let answer = 0;
    for(let i=0;i<s.length;i++){
        let cur = s.slice(i)+s.slice(0,i);
        let stack = [];
        let cnt = 0
        for(let j=0;j<cur.length;j++){
            if(cur[j]==='{' || cur[j]==='(' || cur[j]==='[') stack.push(cur[j])     
            else {
                if(stack.length===0) break;
                let prev = stack.pop();
                if(obj[prev]!==cur[j]) break;
            }
            cnt++;
        }
        if(cnt===cur.length && stack.length===0) answer++;
    }
    return answer
}
