function solution(my_str, n) {
    const answer=[];
   for(let i=0; i<Math.ceil(my_str.length/n);i++){
       answer.push(my_str.slice(n*i,n*(i+1)));
   }
    return answer
}