function solution(my_string) {
    let answer=""
    my_string.split("").forEach((el)=>{
        if(!answer.includes(el)) answer+=el
    })
    return answer
}