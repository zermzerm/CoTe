const solution = (n, words) => {
  let member = 2;
  let cnt = 1;
  let arr = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (arr.includes(words[i])) return [member, cnt];
    else arr.push(words[i]);
    if (words[i][0] !== words[i - 1][words[i - 1].length - 1])
      return [member, cnt];
    member++;
    if (member > n) {
      member = 1;
      cnt++;
    }
  }
  return [0, 0];
};