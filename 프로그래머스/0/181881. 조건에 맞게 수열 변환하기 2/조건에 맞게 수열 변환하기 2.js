const solution = (arr) => {
  let cnt = 0;
  while (true) {
    let changeArr = [...arr];
    for (let i = 0; i < changeArr.length; i++) {
      if (changeArr[i] >= 50 && changeArr[i] % 2 === 0) changeArr[i] /= 2;
      else if (changeArr[i] < 50 && changeArr[i] % 2 === 1)
        changeArr[i] = changeArr[i] * 2 + 1;
    }
    if (changeArr.toString() === arr.toString()) return cnt;
    else {
      cnt++;
      arr = changeArr;
    }
  }
};