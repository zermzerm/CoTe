function solution(arr1, arr2) {
    const answer = Array.from({length:arr1.length}, () => Array(arr2[0].length).fill(0));
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1[i].length;j++){
            for(let k=0;k<arr2[0].length;k++){
                answer[i][k] += arr1[i][j]*arr2[j][k]
            }
        }
    }
    return answer;
}