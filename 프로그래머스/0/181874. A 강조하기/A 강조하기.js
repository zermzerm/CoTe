function solution(myString) {
    return myString.split("").map((el)=>el==="a" || el==="A" ? "A" : el.toLowerCase()).join("")
}