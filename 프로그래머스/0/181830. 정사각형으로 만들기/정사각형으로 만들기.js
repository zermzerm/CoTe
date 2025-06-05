function solution(arr) {
 // let answer = arr.map(v => [...v]);
 //  if (arr.length === arr[0].length) return answer;
 //  else if (arr.length > arr[0].length) {
 //    for (let i = 0; i < arr.length; i++) {
 //      for (let j = 0; j < arr.length - arr[0].length; j++) {
 //        answer[i].push(0);
 //      }
 //    }
 //  } else if (arr.length < arr[0].length) {
 //    for (let i = 0; i < arr[0].length - arr.length; i++)
 //      answer.push(new Array(arr[0].length).fill(0));
 //  }
 //  return answer;
    
    let diff = arr[0].length-arr.length
    if(diff===0) return arr;
    if(diff<0){
        //배열에 0을 diff만큼 추가
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<Math.abs(diff);j++){
                arr[i].push(0);
            }
        }
    }
    else {
        //arr[0].length의 0000배열을 diff만큼 추가
        for(let i=0;i<diff;i++){
            arr.push(Array(arr[0].length).fill(0));
        }
    }
    return arr
}