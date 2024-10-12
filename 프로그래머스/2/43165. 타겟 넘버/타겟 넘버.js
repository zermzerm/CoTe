function solution(numbers, target){
    let answer = 0;
    function dfs(index,sum){
        if(index===numbers.length){
            if(sum===target){
                answer ++;
            }
            return;
        }
        dfs(index+1,sum+numbers[index]);
        dfs(index+1,sum-numbers[index]);
    }
    dfs(0,0);
    return answer;
}

// function generateBinarySequences(length) {
//   const result = [];
//   for (let i = 0; i < Math.pow(2, length); i++) {
//     const binary = i.toString(2).padStart(length, '0').split("").map(Number);
//     result.push(binary);
//   }
//   return result;
// }

// function solution(numbers, target){
//   let cnt =0;
//   const totalArr = generateBinarySequences(numbers.length);
//   for(let i=0;i<totalArr.length;i++){
//     let sum=0;
//     for(let j=0;j<totalArr[i].length;j++){
//       totalArr[i][j]===0 ? sum+=numbers[j] : sum-=numbers[j];
//     }
//     if(sum===target) cnt++;
//   }
//   return cnt;
// }