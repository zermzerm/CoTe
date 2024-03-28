const solution = (s) => {
  const small = [],
    big = [];
  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toUpperCase() ? big.push(s[i]) : small.push(s[i]);
  }
  return small.sort().reverse().join("") + big.sort().reverse().join("");
};