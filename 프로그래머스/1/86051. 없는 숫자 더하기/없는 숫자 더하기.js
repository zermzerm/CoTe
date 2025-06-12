function solution(numbers) {
    // var sum=0;
    // for(i=0;i<numbers.length;i++){
    //     sum+=numbers[i];
    // }
    // return 45-sum;
    
    let sum = 0;
    for(let i=0;i<numbers.length;i++) sum+=numbers[i];
    return 45-sum;
}