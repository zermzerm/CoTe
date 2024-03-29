function solution(my_string) {
  let arr = my_string.split(" ");
  let tmp = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] === "+" ? (tmp += +arr[i + 1]) : (tmp -= +arr[i + 1]);
    i++;
  }
  return tmp;
}