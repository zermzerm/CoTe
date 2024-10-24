function solution(priorities, location) {
    const arr =  priorities.map((el,idx)=>[el,idx]);
    const answerIdx = arr[location];
    let cnt =1;
    while(priorities.length>0){
        if(priorities[0]!==Math.max(...priorities)){
            let tmp = priorities[0];
            priorities.shift();
            priorities.push(tmp);
            tmp = arr[0];
            arr.shift();
            arr.push(tmp);
        }
        else{
            if(arr[0][1]===location) return cnt;
            else{
                arr.splice(0,1);
                priorities.splice(0,1);
                cnt++;
            }
        }
    }
}