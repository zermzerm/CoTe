function solution(s) {
    const arr = s.slice(1,-1).split("},{").map((el)=>el.replace(/{|}/g,'').split(",")).sort((a,b)=>a.length-b.length);
    // console.log(arr)
    let answer = [+arr[0]]
    for(let i=1;i<arr.length;i++){
        let tmpArr = [...arr[i-1],...arr[i]];
        let uniqueArr = tmpArr.filter(item => tmpArr.indexOf(item) === tmpArr.lastIndexOf(item));
        answer.push(+uniqueArr[0])
    }
    return answer
}