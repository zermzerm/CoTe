function solution(age) {
    return age.toString().split("").map((el)=>String.fromCharCode(+el+97)).join("");
}