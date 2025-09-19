function solution(topping){
    let first = new Map();
    let second = new Map();
    let cnt =0;
    for(let i=0;i<topping.length;i++){
        first.set(topping[i], first.get(topping[i]) ? first.get(topping[i]) + 1 : 1)
    }
    for(let i=0;i<topping.length;i++){
        second.set(topping[i], second.get(topping[i]) ? second.get(topping[i])+1 : 1)
        if(first.get(topping[i])>1) first.set(topping[i], first.get(topping[i])-1);
        else if(first.get(topping[i])===1) first.delete(topping[i]);
        if(first.size===second.size) cnt++;
    }
    return cnt
    //시간 초과
    // let cnt =0;
    // for(let i=1; i<topping.length;i++){
    //     let first = new Set (topping.slice(0,i));
    //     let second = new Set(topping.slice(i));
    //     if(first.size===second.size) cnt++;
    // }
    // return cnt
    
    //Set으로 정답
    // let cakeA = {};
    // let cakeB = new Set();
    // let type = 0;
    // let answer =0;
    // for(let i=0;i<topping.length;i++){
    //     if(cakeA[topping[i]]){
    //         cakeA[topping[i]]++;
    //     }
    //     else{
    //         cakeA[topping[i]] = 1;
    //         type++;
    //     }
    // }
    // for(let i=0;i<topping.length;i++){
    //     cakeB.add(topping[i]);
    //     cakeA[topping[i]]--;
    //     if(!cakeA[topping[i]]) type--;
    //     if(cakeB.size===type) answer++;
    // }
    // return answer;
}

//시간 초과
// function solution(topping){
//     let cnt=0;
//     for(let i=0;i<topping.length;i++){
//         let arr1=new Map(); arr2=new Map();
//         for(let j=0;j<=i;j++){
//             if(!arr1.has(topping[j])) arr1.set(topping[j])
//         }
//         for(let k=i+1;k<topping.length;k++){
//             if(!arr2.has(topping[k])) arr2.set(topping[k])
//         }
//         if(arr1.size===arr2.size) cnt++;
//     }
//     return cnt
// }