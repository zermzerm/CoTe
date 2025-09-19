function solution(n, m, section) {
    let diff = 0;
    let cnt = 1;
    for(let i=0;i<section.length-1;i++){
        if(diff + section[i+1] - section[i]<m) diff += section[i+1] - section[i];
        else{
            cnt++;
            diff = 0;
        }
    }
    return cnt
    
    
    // var answer = 0,c=0;
    // while(true){
    //     if(section.length===0){
    //         break;
    //     }
    //     if(section.length===1 ||section[section.length-1]<c){
    //         answer+=1;
    //         break;
    //     }
    //     var cnt=0;
    //     c=section[0]+m;
    //     for(j=0;j<section.length;j++){
    //         if(section[j]<c){
    //             cnt++;
    //         }
    //         else{
    //             section.splice(0,cnt);
    //             answer+=1;
    //             break;
    //         }
    //     }
    // }
    // return answer;
}