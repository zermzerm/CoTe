function solution(progresses, speeds) {
  // let calc = [];
  // let answer = [];
  // for (let i = 0; i < progresses.length; i++) {
  //   calc.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  // }
  // let stack = [calc[0]];
  // for (let i = 1; i < calc.length; i++) {
  //   if (stack[stack.length - 1] >= calc[i]) stack.unshift(calc[i]);
  //   else {
  //     answer.push(stack.length);
  //     stack = [calc[i]];
  //   }
  //   if (i === calc.length - 1) answer.push(stack.length);
  // }
  // return answer;
    
    let speedArr = [];
    for(let i=0;i<progresses.length;i++){
        speedArr.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let cntArr = [speedArr[0]];
    for(let i=1;i<speedArr.length;i++){
        if(speedArr[i]<=cntArr[i-1]) cntArr.push(cntArr[i-1])
        else cntArr.push(speedArr[i])
    }
    let answer = [];
    let cnt =1;
    for(let i=1;i<cntArr.length;i++){
        if(cntArr[i-1]!==cntArr[i]){
            answer.push(cnt);
            cnt=1;
        }
        else cnt++;
    }
    answer.push(cnt)
    return answer
}