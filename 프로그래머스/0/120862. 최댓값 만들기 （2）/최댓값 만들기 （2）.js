function solution(numbers) {
    numbers.sort((a,b)=>b-a)
    return Math.max(numbers[0]*numbers[1],numbers.at(-1)*numbers.at(-2))
}