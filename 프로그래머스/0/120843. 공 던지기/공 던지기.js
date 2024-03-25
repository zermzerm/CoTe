const solution = (numbers, k) => {
  let cnt = 1;
  let index = 0;
  while (cnt !== k) {
    cnt++;
    if (index === numbers.length - 2) index = 0;
    else if (index > numbers.length - 2) index = 1;
    else index += 2;
  }
  return numbers[index];
};