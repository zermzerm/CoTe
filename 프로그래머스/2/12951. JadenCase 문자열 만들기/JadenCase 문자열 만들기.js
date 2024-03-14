function solution(s) {
  let arr = s.split(' ');
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] === '' ? answer.push(arr[i]) : 
      answer.push(
        isNaN(arr[i][0])
          ? arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
          : arr[i][0] + arr[i].slice(1).toLowerCase()
      );
  }
  return answer.join(' ');
}