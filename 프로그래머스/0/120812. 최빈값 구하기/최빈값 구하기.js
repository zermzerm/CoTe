function solution(array) {
    // while(true){
    //     if(array.length==0){
    //         return -1;
    //     }
    //     if(array.length==1){
    //         return array[0];
    //     }
    //     let array2 = array.filter((el,i)=>array.indexOf(el)!==i);
    //     array=array2;
    // }
    if(array.length===1) return +array[0];
    if(array.length===0) return -1;
    let obj = {};
    for(let i =0; i<array.length;i++){
        obj[array[i]] ? obj[array[i]]++ : obj[array[i]] = 1;
    }
    let arr = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    if(arr.length===1) return +arr[0][0];
    if(arr[0][1]!==arr[1][1]) return +arr[0][0]
    else return -1
}