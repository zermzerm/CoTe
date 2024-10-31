function solution(topping){
    let cakeA = {};
    let cakeB = new Set();
    let type = 0;
    let answer =0;
    for(let i=0;i<topping.length;i++){
        if(cakeA[topping[i]]){
            cakeA[topping[i]]++;
        }
        else{
            cakeA[topping[i]] = 1;
            type++;
        }
    }
    for(let i=0;i<topping.length;i++){
        cakeB.add(topping[i]);
        cakeA[topping[i]]--;
        if(!cakeA[topping[i]]) type--;
        if(cakeB.size===type) answer++;
    }
    return answer;
}

// function solution(topping) {
//     let cnt =0;
//     for(let i=0;i<topping.length;i++){
//         let arr1=new Set(topping.slice(0,i+1)),arr2=new Set(topping.slice(i+1));
//         if(arr1.size ===arr2.size) cnt++;
//     }
//     return cnt;
// }

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