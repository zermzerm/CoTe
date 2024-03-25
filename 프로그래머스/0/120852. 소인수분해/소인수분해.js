const solution = (n) => {
  let answer = [];
  let index = 2;
  while (n != 1) {
    if (n % index === 0) {
      n = n / index;
      answer.push(index);
    } else {
      index++;
    }
  }
  return [...new Set(answer)];
};