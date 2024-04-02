function solution(picture, k) {
  let answer = [];

  for (let i = 0; i < picture.length; i++) {
    let tmp = '';
    for (let j = 0; j < picture[i].length; j++) {
      tmp += picture[i][j].repeat(k);
    }
    answer = answer.concat(Array(k).fill(tmp));
  }
  return answer;
}