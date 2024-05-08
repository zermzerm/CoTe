function calc(prev, num) {
  if (prev === "+") return +num;
  else if (prev === "-") return -num;
  else return +num;
}

function solution(polynomial) {
  const arr = polynomial.split(" ");
  let xValue = 0,
    numValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      let num = +arr[i].replace(/[^0-9]/g, "");
      if (num === 0) num = 1;
      xValue += calc(arr[i - 1], num);
    } else if (Number.isInteger(+arr[i])) {
      let num = +arr[i];
      numValue += calc(arr[i - 1], num);
    }
  }
      if (xValue === 1) xValue = "";
  if (xValue === 0)
    return numValue < 0 ? `- ${Math.abs(numValue)}` : `${numValue}`;
  if (numValue === 0)
    return xValue < 0 ? `- ${Math.abs(xValue)}x` : `${xValue}x`;
  return `${xValue < 0 ? "- " + Math.abs(xValue) : xValue}x ${
    numValue < 0 ? "- " + Math.abs(numValue) : "+ " + numValue
  }`;
}