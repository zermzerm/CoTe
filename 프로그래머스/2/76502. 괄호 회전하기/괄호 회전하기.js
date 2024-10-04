function solution(s){
    const obj = {']' : '[',')' : '(','}' : '{'};
    let cnt =0;
    for(let j=0;j<s.length;j++){
        const stack = [];
        for(let i=0;i<s.length;i++){
            if(s[i]===']' || s[i]==='}' || s[i]===')'){
                let popString = stack.at(-1);
                if(obj[s[i]]===popString) {
                    stack.pop();
                }
                else {
                    stack.push(-1);
                    break;
                }
            }
            else stack.push(s[i])
        }
        if(stack.length===0) cnt++;
        s = s[s.length - 1] + s.slice(0,-1) 
    }
    return cnt;
}
