const solution = (n) => {
  let answer = new Set();
  let index = 2;
  while (n != 1) {
    if (n % index === 0) {
      n /=  index;
      answer.add(index);
    } else {
      index++;
    }
  }
  return [...answer];
};