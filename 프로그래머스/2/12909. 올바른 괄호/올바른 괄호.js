function solution(s) {
  let arr = s.split('');
  let cnt = 0;
  if (arr[0] === ')') return false;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === '(' ? cnt++ : cnt--;
      if(cnt<0) return false
  }
  if (cnt === 0) return true;
  else return false;
}