function solution(num_list) {
    let odd ="", even="";
    for(let i=0;i<num_list.length;i++){
        num_list[i]%2===1? odd +=num_list[i] : even +=num_list[i]
    }
    return +odd + +even;
}