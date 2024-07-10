function solution(order) {
    return order.reduce((acc,cur,idx)=>order[idx].includes("latte") ? acc+5000 : acc+4500,0 )
}