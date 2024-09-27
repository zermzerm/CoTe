function solution(want, number, discount) {
    let allItem = [];
    let cnt=0;
    for(let i=0;i<want.length;i++){
        for(let j=0;j<number[i];j++){
            allItem.push(want[i])
        }
    }
    for(let i=0;i<discount.length;i++){
        let tmpItem = [...allItem];
        for(let j=i;j<i+10;j++){
            if(tmpItem.includes(discount[j])) tmpItem.splice(tmpItem.indexOf(discount[j]),1);
        }
        if(tmpItem.length===0) cnt++;
    }
    return cnt;
}