function solution(myStr) {
    const answer = myStr.split(/a|b|c/).filter((el)=>el!=="")
   return answer.length ? answer : ["EMPTY"]
}