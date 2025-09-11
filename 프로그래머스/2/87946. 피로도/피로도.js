function solution(k, dungeons) {
    const N = dungeons.length;
    const visited = Array(N).fill(0);
    let answer =0;
    
    function dfs(k,cnt){
        answer = Math.max(answer,cnt)
        
        for(let i=0;i<N;i++){
            if(k>=dungeons[i][0] && !visited[i]){
                visited[i]=1;
                dfs(k-dungeons[i][1], cnt+1)
                visited[i]=0;
            }
        }
    }
    dfs(k,0);
    return answer;
}

// function solution(k, dungeons) {
//     dungeons.sort((a,b)=>(b[0]-b[1])-(a[0]-a[1]));
//     const answer = [];
//     const permutations = getPermutations(dungeons, dungeons.length);
//     for(let i=0;i<permutations.length;i++){
//         let cnt=0;
//         let tmpK=k;
//         for(let j=0;j<permutations[i].length;j++){
//             if(permutations[i][j][0]<=tmpK){
//             tmpK-=permutations[i][j][1];
//             cnt++;
//         }
//         }
//         answer.push(cnt)
//     }
//     return Math.max(...answer);
// }

// function getPermutations(arr, n) {
//   let results = [];

//   if (n === 1) {
//       return arr.map(item => [item]);
//   }

//   arr.forEach((current, index) => {
//       const remaining = arr.slice(0, index).concat(arr.slice(index + 1));
//       const smallerPermutations = getPermutations(remaining, n - 1);
//       smallerPermutations.forEach(permutation => {
//           results.push([current, ...permutation]);
//       });
//   });

//   return results;
// }