const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const compete = (answers, arr, cnt, k) => {
  for (let i = 0; i < answers.length; i++) {
    let j = i % arr.length;
    if (answers[i] === arr[j]) cnt[k]++;
  }
};

const solution = (answers) => {
  const cnt = [0, 0, 0];
  const answer = [];
  compete(answers, one, cnt, 0);
  compete(answers, two, cnt, 1);
  compete(answers, three, cnt, 2);
  let max = Math.max(...cnt);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] === max) answer.push(i + 1);
  }
  return answer;
};