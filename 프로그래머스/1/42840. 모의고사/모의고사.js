const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const solution = (answers) => {
  const cnt = [0, 0, 0];
  const answer = [];
  for (let i = 0; i < answers.length; i++) {
    let j = i % one.length;
    if (answers[i] === one[j]) cnt[0]++;
  }
  for (let i = 0; i < answers.length; i++) {
    let j = i % two.length;
    if (answers[i] === two[j]) cnt[1]++;
  }
  for (let i = 0; i < answers.length; i++) {
    let j = i % three.length;
    if (answers[i] === three[j]) cnt[2]++;
  }
  let max = Math.max(...cnt);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] === max) answer.push(i + 1);
  }
  return answer;
};