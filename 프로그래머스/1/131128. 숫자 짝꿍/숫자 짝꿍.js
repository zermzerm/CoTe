// function solution(X, Y) {
//     const maxX = X.split("").sort((a,b)=>b-a);
//     const maxY = Y.split("").sort((a,b)=>b-a);
//     let same = [];
//     let start = 0;
//     for(let i=0;i<maxX.length;i++){
//         for(let j=start;j<maxY.length;j++){
//             if(maxX[i]===maxY[j]){
//                 same.push(maxX[i])
//                 start=j+1;
//                 break;
//             }
//         }
//     }
//     return same.length!==0 ? `${BigInt(same.sort((a,b)=>b-a).join(""))}` : "-1";
// }

function solution(X, Y) {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    // 두 문자열의 숫자 빈도 계산
    for (let char of X) countX[char]++;
    for (let char of Y) countY[char]++;
    
    let result = '';

    // 공통 숫자를 9부터 0까지 내림차순으로 문자열에 추가
    for (let i = 9; i >= 0; i--) {
        const minCount = Math.min(countX[i], countY[i]);
        if (minCount > 0) result += String(i).repeat(minCount);
    }
    
    // 결과가 비어 있는 경우 "-1" 반환, 그렇지 않으면 BigInt로 변환 후 문자열 반환
    if (result === '') return "-1";
    if (result[0] === '0') return "0"; // 결과가 "0"만으로 구성된 경우

    return result;
}