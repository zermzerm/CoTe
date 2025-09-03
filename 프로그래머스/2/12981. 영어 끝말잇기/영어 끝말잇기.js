const solution = (n, words) => {
  // let member = 2;
  // let cnt = 1;
  // let arr = [words[0]];
  // for (let i = 1; i < words.length; i++) {
  //   if (arr.includes(words[i]) || words[i][0] !== words[i - 1][words[i - 1].length - 1]) return [member, cnt];
  //   else arr.push(words[i]);
  //   member++;
  //   if (member > n) {
  //     member = 1;
  //     cnt++;
  //   }
  // }
  // return [0, 0];
    
    
    let answer = [1,1];
    let acc = words[0];
    for(let i=1;i<words.length;i++){
        if(i%n===0) answer[1]++;
        let cur = words[i];   
        if(acc[acc.length-1]!==cur[0]||words.indexOf(cur)!==i){
            answer[0] = i%n+1;
            return answer;
        }
        acc = words[i];
    }
        return [0,0]
};