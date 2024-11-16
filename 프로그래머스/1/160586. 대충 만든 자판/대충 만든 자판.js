function solution(keymap, targets) {
    const answer = [];
    for(let i=0;i<targets.length;i++){
        let cnt = [];
        for(let j=0;j<targets[i].length;j++){
            let keyIdx = [];
            for(let k=0;k<keymap.length;k++){
                if(keymap[k].indexOf(targets[i][j])!==-1) keyIdx.push(keymap[k].indexOf(targets[i][j])+1);
            }
            cnt.push(keyIdx.length!==0 ? Math.min(...keyIdx) : -1);
        }
        !cnt.includes(-1) ? answer.push(cnt.reduce((acc,cur)=>acc+cur,0)) : answer.push(-1);
    }
    return answer;
}