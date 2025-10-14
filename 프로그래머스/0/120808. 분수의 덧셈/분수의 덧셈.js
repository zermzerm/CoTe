function solution(numer1, denom1, numer2, denom2) {
    function GCD(num1,num2){
        return num1%num2 ? GCD(num2,num1%num2) : num2;
    }
    let mo = denom1*denom2;
    let za = numer1*denom2+numer2*denom1;
    return [za/GCD(za,mo),mo/GCD(za,mo)];
    
    // var za=0,mo=0;
    // var za_arr=[],mo_arr=[],re_arr=[];
    // za=numer1*denom2+numer2*denom1;
    // mo=denom1*denom2;
    // for(var i=2;i<za+1;i++){
    //     if(za%i==0){
    //         za_arr.push(i);
    //     }
    // }
    // for(var i=2;i<mo+1;i++){
    //     if(mo%i==0){
    //         mo_arr.push(i);
    //     }
    // }
    // for(var i=0;i<za_arr.length;i++){
    //     for(var j=0;j<mo_arr.length;j++){
    //         if(za_arr[i]==mo_arr[j]){
    //             re_arr.push(za_arr[i]);
    //         }
    //     }
    // }
    // if(re_arr!=0){
    // var it = re_arr[re_arr.length-1];
    // za=za/it;
    // mo=mo/it;
    // }
    // var answer=[za,mo];
    // return answer;
}