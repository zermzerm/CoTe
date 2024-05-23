function solution(dartResult) {
  const arr = [];
  let tmpString = dartResult[0];
  for (let i = 1; i < dartResult.length; i++) {
    if (isNaN(dartResult[i - 1]) && !isNaN(+dartResult[i])) {
      arr.push(tmpString);
      tmpString = "";
    }
    tmpString += dartResult[i];
  }
  arr.push(tmpString);
  const answerArr = Array(arr.length).fill(0);
  const stringArr = arr.map((el) => el.replace(/\d/g, ""));
  const numberArr = arr.map((el) => +el.replace(/\D/g, ""));
  for (let i = 0; i < arr.length; i++) {
    switch (stringArr[i][0]) {
      case "S":
        answerArr[i] += numberArr[i];
        break;
      case "D":
        answerArr[i] += numberArr[i] ** 2;
        break;
      case "T":
        answerArr[i] += numberArr[i] ** 3;
        break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (stringArr[i].includes("*")) {
      answerArr[i] *= 2;
      if (i !== 0) answerArr[i - 1] *= 2;
    } else if (stringArr[i].includes("#")) {
      answerArr[i] *= -1;
    }
  }
  return answerArr.reduce((acc, cur) => acc + cur, 0);
}