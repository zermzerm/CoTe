const solution = (sides) => {
  // const arr = sides.sort((a, b) => a - b);
  // let cnt = 0;
  // for (let i = arr[1] - arr[0] + 1; i <= arr[1]; i++) {
  //   cnt++;
  // }
  // for (let i = arr[1] + arr[0] - 1; i > arr[1]; i--) {
  //   cnt++;
  // }
  // return cnt;
    
    let sum = sides[0]+sides[1];
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let result = 0;
    for(let i=max+1;i<sum;i++){
        result++;
    }
    for(let i=max-min+1;i<=max;i++){
        result++;
    }
    return result;
};