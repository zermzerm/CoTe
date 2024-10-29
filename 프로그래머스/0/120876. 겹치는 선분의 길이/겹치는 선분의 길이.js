function solution(lines) {
    let cnt = [];
    for(let i=0;i<lines.length;i++){
        for(let j=i+1;j<lines.length;j++){
            // lines[i] 와 lines[j] 비교
            let first = 0,last=0;
            if(lines[j][0]>=lines[i][0]&&lines[j][0]<=lines[i][1]){
                first = lines[j][0];
                if(lines[i][1]<=lines[j][1]) last = lines[i][1];
                else last = lines[j][1]
            }
            else if(lines[j][0]<=lines[i][0]&&lines[j][0]<=lines[i][1]){
                first = lines[i][0];
                if(lines[i][1]<=lines[j][1]) last = lines[i][1];
                else last = lines[j][1]
            }
            for(let i=first+1;i<=last;i++){
                cnt.push(i)
            }
        }
    }
    // console.log(cnt)
    return [...new Set(cnt)].length
}