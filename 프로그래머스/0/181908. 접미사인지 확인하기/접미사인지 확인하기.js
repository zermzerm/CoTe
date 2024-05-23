function solution(my_string, is_suffix) {
    const arr =[];
for(let i=0;i<my_string.length;i++){
    arr.push(my_string.slice(i))
}
    return arr.indexOf(is_suffix) !== -1 ? 1 : 0
}