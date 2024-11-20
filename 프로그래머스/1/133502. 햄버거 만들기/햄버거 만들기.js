function solution(ingredient) {
    let cnt =0;
    let tmp = [];
    for(let i=0;i<ingredient.length;i++){
        tmp.push(ingredient[i]);
        if(JSON.stringify(tmp.slice(-4)) === JSON.stringify([1, 2, 3, 1])){
            cnt++;
            tmp.splice(-4)
        }
    }
    return cnt;
}