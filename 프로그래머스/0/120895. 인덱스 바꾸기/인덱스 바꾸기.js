function solution(my_string, num1, num2) {
    let answer = my_string.split("");
    let one = answer[num1];
    let two = answer[num2];
    answer.splice(num1,1,two);
    answer.splice(num2,1,one)
    return answer.join("");
}