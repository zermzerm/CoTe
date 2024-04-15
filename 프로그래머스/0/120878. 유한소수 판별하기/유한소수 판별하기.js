function measure(a) {
  let arr = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) arr.push(i);
  }
  return arr;
}

function solution(a, b) {
  let aArr = measure(a);
  let bArr = measure(b);
  let cd = [];
  for (let i = 0; i < aArr.length; i++) {
    for (let j = 0; j < bArr.length; j++) {
      if (aArr[i] === bArr[j]) cd.push(aArr[i]);
    }
  }
  b /= Math.max(...cd);
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;
  return b !== 1 ? 2 : 1;
}