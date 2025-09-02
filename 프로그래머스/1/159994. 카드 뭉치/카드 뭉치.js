function solution(cards1, cards2, goal) {
    for(let i=0;i<goal.length;i++){
        if(cards1.indexOf(goal[i])===0) cards1.splice(0,1);
        else if(cards2.indexOf(goal[i])===0) cards2.splice(0,1);
        else return "No"
    }
    return "Yes"
}