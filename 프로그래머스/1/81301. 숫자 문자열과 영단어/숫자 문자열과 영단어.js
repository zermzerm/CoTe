function solution(s) {
  let arr = s.split("");
  let answer = "";
  let tmp = "";
  let object = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      answer += arr[i];
    } else {
      tmp += arr[i];
    }
    if (object[tmp] !== undefined) {
      answer += object[tmp];
      tmp = "";
    }
  }
  return +answer;
}