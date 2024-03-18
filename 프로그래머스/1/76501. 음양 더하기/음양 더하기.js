function solution(absolutes, signs) {
    var answer = 0;
    answer = absolutes.map((el,index)=>signs[index] === true ? answer+=el : answer+=-el);
    return answer[answer.length-1];
}