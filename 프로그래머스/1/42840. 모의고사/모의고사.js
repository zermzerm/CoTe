// const one = [1, 2, 3, 4, 5];
// const two = [2, 1, 2, 3, 2, 4, 2, 5];
// const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

// const compare = (answers, arr, cnt, k) => {
//   for (let i = 0; i < answers.length; i++) {
//     let j = i % arr.length;
//     if (answers[i] === arr[j]) cnt[k]++;
//   }
// };
const ONE = [1,2,3,4,5];
const TWO = [2,1,2,3,2,4,2,5];
const THREE = [3,3,1,1,2,2,4,4,5,5];

const measure = (type, arr)=>{
    let cnt = 0;
    for(let i = 0; i < arr.length; i++){
        if(type[i % type.length] === arr[i]) cnt++;
    }
    return cnt;
}

const solution = (answers) => {
  // const cnt = [0, 0, 0];
  // const answer = [];
  // compare(answers, one, cnt, 0);
  // compare(answers, two, cnt, 1);
  // compare(answers, three, cnt, 2);
  // let max = Math.max(...cnt);
  // for (let i = 0; i < cnt.length; i++) {
  //   if (cnt[i] === max) answer.push(i + 1);
  // }
  // return answer;
    let oneCnt = measure(ONE, answers);
    let twoCnt = measure(TWO, answers);
    let threeCnt = measure(THREE, answers);
    let max = Math.max(oneCnt,twoCnt,threeCnt);
    let arr = [oneCnt,twoCnt,threeCnt];
    let answer = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===max) answer.push(i+1)
    }
    return answer;  
};