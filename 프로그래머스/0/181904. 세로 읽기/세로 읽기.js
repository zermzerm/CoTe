function solution(my_string, m, c) {
    let answer =""
   for(let i=0;i<my_string.length;i+=m){
      let tmp = my_string.slice(i,i+m)
      console.log(tmp)
      answer +=tmp[c-1]
   }
    return answer;
}