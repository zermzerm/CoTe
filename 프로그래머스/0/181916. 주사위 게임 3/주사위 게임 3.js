function solution(a, b, c, d) {
    let value = [a,b,c,d].sort();
    let arr = [...new Set(value)];
    console.log(arr)
    switch(arr.length){
        case 1:
            return 1111*arr[0];
        case 2:
            // 2개 2개인 경우
            if(value.filter((el)=>el!==a).length===2) return (arr[0]+arr[1])*Math.abs(arr[0]-arr[1]);
            //3개 1개인 경우
            else {
                if(value.filter((el)=>el===arr[0]).length===3) return (10*arr[0]+arr[1])**2;
                else return (10*arr[1]+arr[0])**2
            }
        case 3:
            // 2개 1개 1개인 경우
            let two = value.filter((el,idx)=>value.lastIndexOf(el)===value.indexOf(el))
            return two[0]*two[1];
        case 4:
            return Math.min(...arr);
    }
}

//4개p 같 => 1111*p

//3개p, 1개q => (10*p + q)**2 -> 주의
//2개p, 2개q => (p+q)*|p-q|

//2개p, 1개q, 1개r => q*r -> 주의

//1개p, 1개q, 1개r, 1개s => 가장큰 값