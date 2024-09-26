function solution(elements) {
    let arr = [];
    for(let i=1;i<=elements.length;i++){
        for(let j=0;j<elements.length;j++){
            let tmpArr = elements.slice(j,j+i)
            if(tmpArr.length<i) tmpArr.push(...elements.slice(0,i-tmpArr.length));
            let sumArr = tmpArr.reduce((acc,cur)=>acc+cur,0)
            arr.push(sumArr)
        }
    }
    return [...new Set(arr)].length
}