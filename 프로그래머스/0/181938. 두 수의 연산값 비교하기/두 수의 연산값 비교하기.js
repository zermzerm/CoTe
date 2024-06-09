function solution(a, b) {
    const answer =[];
    answer.push(2*a*b, +(`${a}`+`${b}`));
    return Math.max(...answer)
}