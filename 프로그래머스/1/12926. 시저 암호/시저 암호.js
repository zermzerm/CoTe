function solution(s, n) {
  //아스키 코드 65 97
  //문자 -> 아스키코드 = 문자.charCodeAt()
  //아스키코드 -> 문자 = String.fromCharCode(번호)
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") continue;
    if (arr[i].charCodeAt() <= 90) {
      //대문자 65~90
      let cur = arr[i].charCodeAt() + n;
      if (cur > 90) cur -= 26;
      arr.splice(i, 1, String.fromCharCode(cur));
    } else {
      //소문자 97~122
      let cur = arr[i].charCodeAt() + n;
      if (cur > 122) cur -= 26;
      arr.splice(i, 1, String.fromCharCode(cur));
    }
  }
  return arr.join("");
}