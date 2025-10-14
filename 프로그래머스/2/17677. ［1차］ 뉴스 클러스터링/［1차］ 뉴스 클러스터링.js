function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    let cnt = 0;
    function compare(str){
        let arr = [];
        for(let i=0;i<str.length-1;i++){
            if(str[i].match(/[A-Za-z]/)&&str[i+1].match(/[A-Za-z]/)){
                arr.push(str[i]+str[i+1]);
            }
        }
        return arr;
    }
    let arr1 = compare(str1);
    let arr2 = compare(str2);
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            arr2.splice(arr2.indexOf(arr1[i]),1);
            cnt++;
        }
    }  
    return arr1.length+arr2.length===0? 65536 : Math.floor(cnt/(arr1.length+arr2.length)*65536)
    // let total = arr.length;
    // let setTotal = new Set(arr).size;
    // let child = total - setTotal;
    // console.log(total,setTotal)
    // return Math.floor(child/setTotal*65536)
    
    
//     const arr1=[],arr2=[];
//     let cnt=0;
//     let str11 = str1.toUpperCase();
//     let str22 = str2.toUpperCase();
//     for(let i=1;i<str11.length;i++){
//         let isMatch = /^[A-Z]+$/.test(str11.slice(i-1,i+1))
//         if(isMatch){
//             arr1.push(str11.slice(i-1,i+1))
//         }
//     }
//     for(let i=1;i<str22.length;i++){
//         let isMatch = /^[A-Z]+$/.test(str22.slice(i-1,i+1))
//         if(isMatch){
//             arr2.push(str22.slice(i-1,i+1))
//         }
//     }
//     for(let i=0;i<arr2.length;i++){
//         if(arr1.includes(arr2[i])){
//             arr1.splice(arr1.indexOf(arr2[i]),1);
//             arr2.splice(i,1);
//             cnt++;
//             i--;
//         }
//     }
    
//     return cnt+arr1.length+arr2.length===0 ? 65536 : Math.floor(cnt/(cnt+arr1.length+arr2.length)*65536) ;
}