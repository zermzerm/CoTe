function solution(i, j, k) {
    let cnt =0;
    for(let z=i;z<=j;z++){
        const regex = new RegExp(k, 'g'); 
        cnt += String(z).match(regex) && String(z).match(regex).length;
    }
    return cnt
}