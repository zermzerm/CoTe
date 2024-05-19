function solution(s, skip, index) {
  let answer = '';
  let asciiSkip = skip.split('').map((el) => el.charCodeAt());
  for (let i = 0; i < s.length; i++) {
    let tranS = s[i].charCodeAt();
    for (let j = 0; j < index; j++) {
      tranS++;
      if (tranS > 122) tranS -= 26;
      if (asciiSkip.indexOf(tranS) !== -1) j--;
    }
    answer += String.fromCharCode(tranS);
  }
  return answer;
}