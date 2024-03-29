function solution(str_list) {
  let larr = [],
    rarr = [];
  if (str_list.indexOf("l") < 0 && str_list.indexOf("r") < 0) {
    return [];
  }
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] !== "l" && "r") larr.push(str_list[i]);
    if (str_list[i] === "l") return larr;
    if (str_list[i] === "r") {
      for (let j = i + 1; j < str_list.length; j++) {
        rarr.push(str_list[j]);
      }
      return rarr;
    }
  }
}