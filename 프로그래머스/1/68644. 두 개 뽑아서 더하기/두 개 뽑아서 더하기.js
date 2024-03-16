function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      let tmp = numbers[i] + numbers[j];
      if (!answer.includes(tmp)) {
        answer.push(tmp);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}