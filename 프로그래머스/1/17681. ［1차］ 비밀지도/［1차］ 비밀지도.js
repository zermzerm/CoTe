function solution(n, arr1, arr2) {
  // let answer = [];
  // let tmp1 = arr1.map((el) => el.toString(2).padStart(n, "0"));
  // let tmp2 = arr2.map((el) => el.toString(2).padStart(n, "0"));
  // for (let i = 0; i < tmp1.length; i++) {
  //   let tmp3 = "";
  //   for (let j = 0; j < n; j++) {
  //     if (+tmp1[i][j] + +tmp2[i][j] !== 0) {
  //       tmp3 += "#";
  //     } else {
  //       tmp3 += " ";
  //     }
  //   }
  //   answer.push(tmp3);
  // }
  // return answer;
    
    let answer = [];
    let arr1binary = "";
    let arr2binary = "";
    for(let i=0;i<arr1.length;i++){
        let tmp=""
        arr1binary = arr1[i].toString(2).padStart(n,0);
        arr2binary = arr2[i].toString(2).padStart(n,0);
        for(let j=0;j<arr1binary.length;j++){
            tmp += arr1binary[j]==="1" || arr2binary[j]==="1" ? "#" : " ";
        }
        answer.push(tmp)
    }
    return answer
}