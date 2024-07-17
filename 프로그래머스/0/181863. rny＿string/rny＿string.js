function solution(rny_string) {
    return rny_string.split("").map((el)=>el==='m' ? 'rn' : el).join("");
}