const solution = (A, B) => {
  if (A === B) return 0;
  let tmpStr = "";
  for (let i = 1; i < A.length; i++) {
    tmpStr = A.slice(-i) + A.slice(0, -i);
    if (B === tmpStr) return i;
  }
  return -1;
};