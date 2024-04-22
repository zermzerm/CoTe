function solution(s, n) {
  //대문자 65~90
  //소문자 97~122
  let answer = '';
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      answer += ' ';
      continue;
    }
    let newChar = s[i].charCodeAt();
    //대문자
    if (newChar <= 90) {
      newChar += n;
      if (newChar > 90) newChar -= 26;
      answer += String.fromCharCode(newChar);
    }
    //소문자
    else {
      newChar += n;
      if (newChar > 122) newChar -= 26;
      answer += String.fromCharCode(newChar);
    }
  }
  return answer;
}