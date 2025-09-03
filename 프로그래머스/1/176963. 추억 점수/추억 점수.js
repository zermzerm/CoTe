function solution(name, yearning, photo) {
  // const result = [];
  // for (let i = 0; i < photo.length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < photo[i].length; j++) {
  //     if (name.includes(photo[i][j])) {
  //       sum += yearning[name.indexOf(photo[i][j])];
  //     }
  //   }
  //   result.push(sum);
  // }
  // return result;
    
    
    let answer = [];
    for(let i=0;i<photo.length;i++){
        let sum = 0;
        for(let j=0;j<photo[i].length;j++){
            let idx = name.indexOf(photo[i][j]);
            if(idx!==-1) sum+=yearning[idx]
        }
        answer.push(sum)
    }
    return answer
}