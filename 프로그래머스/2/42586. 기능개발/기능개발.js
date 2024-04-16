function solution(progresses, speeds) {
  let calc = [];
  let answer = [];
  let cnt = 1;
  for (let i = 0; i < progresses.length; i++) {
    calc.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  for (let i = 0; i < calc.length; i++) {
    if (calc[i] >= calc[i + 1]) {
      cnt++;
      calc[i + 1] = calc[i];
    } else if (calc[i] < calc[i + 1]) {
      answer.push(cnt);
      cnt = 1;
      if (calc[i] >= calc[i + 1]) cnt++;
    }
    if (i === calc.length - 1) answer.push(cnt);
  }
  return answer;
}