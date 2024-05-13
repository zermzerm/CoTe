function solution(numbers, n) {
    let answer = numbers.reduce((acc,cur)=>acc<=n ? acc+cur : acc,0)
    return answer;
}