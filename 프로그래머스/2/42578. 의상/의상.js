function solution(clothes) {
  let obj = new Map();
  for (let i = 0; i < clothes.length; i++) {
    obj.has(clothes[i][1])
      ? obj.set(clothes[i][1], obj.get(clothes[i][1]) + 1)
      : obj.set(clothes[i][1], 1);
  }
  let arr = [...obj];
  return arr.reduce((acc, cur) => acc * (cur[1] + 1), 1) - 1;
}