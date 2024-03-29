function solution(my_string) {
  let arr = my_string.split(" ");
  let tmp = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "+") {
      tmp += +arr[i + 1];
    }
    if (arr[i] === "-") {
      tmp -= +arr[i + 1];
    }
    i++;
  }
  return tmp;
}