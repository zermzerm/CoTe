function solution(num_list) {
    let square =0, multi=1;
    for(let i=0;i<num_list.length;i++){
        multi*=num_list[i];
        square+=num_list[i];
    }
    return multi>square**2 ? 0 : 1;
}