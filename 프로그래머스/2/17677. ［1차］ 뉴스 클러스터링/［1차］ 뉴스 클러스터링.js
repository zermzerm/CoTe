function solution(str1, str2) {
    const arr1=[],arr2=[];
    let cnt=0;
    let str11 = str1.toUpperCase();
    let str22 = str2.toUpperCase();
    for(let i=1;i<str11.length;i++){
        let isMatch = /^[A-Z]+$/.test(str11.slice(i-1,i+1))
        if(isMatch){
            arr1.push(str11.slice(i-1,i+1))
        }
    }
    for(let i=1;i<str22.length;i++){
        let isMatch = /^[A-Z]+$/.test(str22.slice(i-1,i+1))
        if(isMatch){
            arr2.push(str22.slice(i-1,i+1))
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){
            arr1.splice(arr1.indexOf(arr2[i]),1);
            arr2.splice(i,1);
            cnt++;
            i--;
        }
    }
    
    return cnt+arr1.length+arr2.length===0 ? 65536 : Math.floor(cnt/(cnt+arr1.length+arr2.length)*65536) ;
}