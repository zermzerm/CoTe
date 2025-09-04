function solution(n, left, right) {
    var answer = [];
    for(var i=left; i<=right; i++)
      answer.push(Math.max(parseInt(i/n),i%n)+1);
    return answer;
    
    // Math.floor(left/n), left%n+1  ~ Math.floor(right/n),right%n+1
}