function solution(numbers) {
  // var answer = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   for (j = i + 1; j < numbers.length; j++) {
  //     let tmp = numbers[i] + numbers[j];
  //     if (!answer.includes(tmp)) {
  //       answer.push(tmp);
  //     }
  //   }
  // }
  // return answer.sort((a, b) => a - b);
    
//     const arr = [[1, 4], [3, 4], [3, 10]];
//     const xArr = arr.map((el)=>el[0]);
//     console.log(xArr)
}



//Set 쓰기
function solution(numbers) {
  var answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}
