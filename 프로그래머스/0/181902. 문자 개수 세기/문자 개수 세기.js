function solution(my_string) {
    let result = Array.from({length:52},()=>0);
    
    for(let i=0;i<my_string.length;i++){
        let charNum = my_string[i].charCodeAt();
        charNum -= charNum >= 97 ? 71 : 65;
        result[charNum]++;
    }
    return result
}