function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(Array(Math.floor(food[i] / 2) + 1).join(i));
  }
  return arr.join("") + "0" + arr.reverse("").join("");
}