function solution(num) {
    let cnt = 0;
while(true){
    if(num===1) break;
    num = (num%2===0 ? num/2 : num*3+1);
    cnt++;
    if(cnt>=500){
        cnt = -1;
        break;
    }
}
    return cnt;
}