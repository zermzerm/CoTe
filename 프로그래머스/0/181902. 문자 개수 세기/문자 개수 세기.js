function solution(my_string) {
  let arr = Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    my_string[i] === my_string[i].toUpperCase()
      ? arr[+my_string[i].charCodeAt() - 65]++
      : arr[+my_string[i].charCodeAt() - 71]++;
  }
  return arr;
}