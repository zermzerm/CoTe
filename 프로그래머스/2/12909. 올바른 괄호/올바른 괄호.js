function solution(s) {
  // let arr = s.split('');
  // let cnt = 0;
  // if (arr[0] === ')') return false;
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] === '(' ? cnt++ : cnt--;
  //     if(cnt<0) return false
  // }
  // if (cnt === 0) return true;
  // else return false;
    
    if(s[0]===')') return false;
    let cnt =0;
    for(let i=0;i<s.length;i++){
        s[i]==='(' ? cnt++ : cnt--;
        if(cnt<0) return false;
    }
    return cnt===0? true : false;
}