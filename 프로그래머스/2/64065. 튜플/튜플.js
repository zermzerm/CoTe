function solution(s) {
    return arr = s.slice(1,-1).split("},{").map((el)=>el.replace(/{|}/g,'').split(",").map((el)=>+el)).sort((a,b)=>a.length-b.length).reduce((acc,cur)=>[...acc,...cur.filter((el)=>!acc.includes(el))],[]);
    // let answer = [+arr[0]]
    // for(let i=1;i<arr.length;i++){
    //     let tmpArr = [...arr[i-1],...arr[i]];
    //     let uniqueArr = tmpArr.filter(item => tmpArr.indexOf(item) === tmpArr.lastIndexOf(item));
    //     answer.push(+uniqueArr[0])
    // }
    // return answer
}