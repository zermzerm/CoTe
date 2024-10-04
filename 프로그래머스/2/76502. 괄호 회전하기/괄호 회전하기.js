// function check(string,p,q){
//     if(string.includes(`${p}`)){
//         if(string.indexOf(`${q}`)>string.indexOf(`${p}`)) return 1;
//         else return 0
//     }
//     else return 0
// }

// function solution(s) {
//     if(s.length%2===1) return 0
//     let cnt=0;
//     for(let i=0;i<s.length;i++){
//         if((check(s,'[',']')+check(s,'{','}')+check(s,'(',')'))===s.length/2) cnt++;
//         console.log(i,s)
//         s = s[s.length - 1] + s.slice(0,-1)
//     }
//     return cnt
// }

// function solution(s){
//     if(s.length%2===1) return 0
    
//     let answer =0;
//     for(let i=0;i<s.length;i++){
//         let obj = {}
//         let cnt =0;
//         for(let j=0;j<s.length;j++){
//             obj[s[j]] ? obj[s[j]]++ : obj[s[j]] = 1;
//             if((obj[')'] || 0) > (obj['('] || 0) || 
//     (obj['}'] || 0) > (obj['{'] || 0) || 
//     (obj[']'] || 0) > (obj['['] || 0))  {
//                 break;  // 잘못된 경우 바로 루프를 빠져나옴
//             }
//             cnt++;
//             // console.log(j, obj, cnt)
//         }
//         if(cnt===s.length) answer++;
//         s = s[s.length - 1] + s.slice(0,-1)
//     }
//     return answer
// }

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
