function solution(people, limit) {
  // const arr = people.sort((a, z) => a - z);
  // const { length } = arr;
  // let start = 0;
  // let end = length - 1;
  // let count = 0;
  // while (start <= end) {
  //   if (arr[start] + arr[end] > limit || start === end) {
  //     end--;
  //   } else {
  //     start++;
  //     end--;
  //     count++;
  //   }
  // }
  // return length - count;
    
    // 안됨
    // let cnt =0;
    // people.sort((a,b)=>a-b);
    // let tmp = 0;
    // for(let i=0;i<people.length;i++){
    //     tmp = people[i];
    //     for(let j=people.length-1;j>0;j--){
    //         if(tmp+people[j]<=limit) {
    //             tmp +=people[j];
    //             people.splice(j,1);
    //             break;
    //         }
    //     }
    //     cnt++;
    // }
    // return cnt;
    
    let start = 0;
    let end = people.length-1;
    let cnt = 0;
    people.sort((a,b)=>a-b);
    while(start<end){
        if(people[start]+people[end]<=limit){
            start++;
            end--;
            cnt++;
        }
        else{
            end--;
        }
    }
    return people.length-cnt;
}
//[40, 40, 40, 60, 60, 70, 80], 120, 4
//50 50 70 80

//40 40 40 60 60 70 80 , 120

//50 70 80