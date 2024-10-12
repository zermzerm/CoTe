function generateBinarySequences(length) {
  const result = [];
  for (let i = 0; i < Math.pow(2, length); i++) {
    const binary = i.toString(2).padStart(length, '0').split("").map(Number);
    result.push(binary);
  }
  return result;
}

function solution(numbers, target){
  let cnt =0;
  const totalArr = generateBinarySequences(numbers.length);
  for(let i=0;i<totalArr.length;i++){
    let sum=0;
    for(let j=0;j<totalArr[i].length;j++){
      totalArr[i][j]===0 ? sum+=numbers[j] : sum-=numbers[j];
    }
    if(sum===target) cnt++;
  }
  return cnt;
}