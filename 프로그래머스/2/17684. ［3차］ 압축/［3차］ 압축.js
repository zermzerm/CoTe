function solution(msg) {
    let alpha = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26};
    let answer =[]; 
    let idx = 27;
    for(let i=0;i<msg.length;i++){
        let tmp = msg[i];
         while(i+1<msg.length && alpha[tmp+msg[i+1]]){
             tmp +=msg[i+1];
             i++;
         }
        answer.push(alpha[tmp]);
        if(i+1<msg.length){
            alpha[tmp+msg[i+1]] = idx++;
        }
        // 수정전
        // while(true){
        //         if(alpha[tmp+msg[i+1]]){
        //             tmp+=msg[i+1];
        //             i++;
        //         }
        //         else{
        //             answer.push(alpha[tmp]);
        //             tmp+=msg[i+1];
        //             alpha[tmp] = Object.keys(alpha).length+1;
        //             break;
        //         }
        // }
    }
    return answer;
}

