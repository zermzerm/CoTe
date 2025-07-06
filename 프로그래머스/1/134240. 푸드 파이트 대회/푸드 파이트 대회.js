function solution(food) {
  // let result = [];
  // for (let i = 1; i < food.length; i++) {
  //   result.push(String(i).repeat(Math.floor(food[i] / 2)));
  // }
  // return result.join('') + '0' + result.reverse().join('');
    
    const answer = [];
    for(let i=1;i<food.length;i++){
        answer.push((""+i).repeat(Math.floor(food[i]/2)));
    }
    return answer.join("") + "0" + answer.reverse().join("")
}