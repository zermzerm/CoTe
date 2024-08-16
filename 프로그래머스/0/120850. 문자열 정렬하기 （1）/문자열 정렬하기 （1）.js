function solution(my_string) {
    return my_string.split("").filter((el)=>+el>=0).map((el)=>+el).sort((a,b)=>a-b);
}