function solution(arr) {
    const stk =[arr[0]];
    for(let i=1;i<arr.length;i++){
        if(stk.at(-1) >= arr[i]){ stk.pop(); i--;}
        else stk.push(arr[i])
    }
    return stk
    // let stk = [arr[0]];
    // for(let i=1;i<arr.length;i++){
    //     if(stk.at(-1)<arr[i]) stk.push(arr[i])
    //     else {
    //        stk.pop();
    //        i--;
    //    }
    // }
    // return stk
}