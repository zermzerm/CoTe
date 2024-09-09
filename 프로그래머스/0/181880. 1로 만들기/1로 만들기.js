function solution(num_list) {
    let cnt =0;
    while(num_list.length!==0){
        if(num_list[0]!==1){
            num_list[0] = num_list[0]%2===1 ? (num_list[0]-1)/2 : num_list[0]/2;
            cnt++;
        }
            else{
                num_list.splice(0,1)
            }
    }
    return cnt;
}