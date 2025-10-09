// function solution(triangle) {
//     for(let i=triangle.length-2;i>=0;i--){
//         for(let j=0;j<triangle[i].length;j++){
//             triangle[i][j]+=Math.max(triangle[i+1][j],triangle[i+1][j+1]);
//         }
//     }
//     return triangle[0][0]
    
    
    // let answer =[];
    // function dp(depth,idx,sum){
    //     if(depth===triangle.length){
    //         answer.push(sum);
    //         return;
    //     }
    //     sum+=triangle[depth][idx]
    //     dp(depth+1,idx,sum)
    //     dp(depth+1,idx+1,sum)
    // }
    // dp(0,0,0);
    // return Math.max(...answer)
// }
    
    // function solution(triangle) {
    // return Math.max(...triangle.reduce((dp, raw) => {
    //         return raw.map((v, i) => {
    //           return Math.max((i === 0 ? 0 : dp[i - 1]), i === dp.length ? 0 : dp[i]) + v; 
    //         });
    //     }, [0]));
// }

function solution(triangle) {
    for(let i=triangle.length-2;i>=0;i--){
        for(let j=0;j<triangle[i].length;j++){
            triangle[i][j] += Math.max(triangle[i+1][j],triangle[i+1][j+1])
        }
    }
    
    return triangle[0][0]
}

// function solution(triangle) {
//     const answer =[];
    
//     function dp(index,cur,sum){
//         if(index===triangle.length){
//             if(!isNaN(sum)){
//                 answer.push(sum);
//             }
//             return;
//         }
//         dp(index+1,cur,sum + triangle[index][cur]);
//         dp(index+1,cur+1, triangle[index][cur+1] && sum + triangle[index][cur+1]);
//     }
//     dp(0,0,0);
//     return Math.max(...answer);
// }