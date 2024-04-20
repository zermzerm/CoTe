function solution(code) {
  let mode = false;
  let ret = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = !mode;
      continue;
    }
    switch (mode) {
      case true:
        if (i % 2 === 1) ret += code[i];
        break;
      case false:
        if (i % 2 === 0) ret += code[i];
        break;
    }
  }
  return ret.length ? ret : "EMPTY";
}