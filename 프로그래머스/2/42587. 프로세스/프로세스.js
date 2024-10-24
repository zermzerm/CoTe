function solution(priorities, location) {
    const arr =  priorities.map((el,idx)=>[el,idx]);
    const answerIdx = arr[location];
    let cnt =1;
    while(priorities.length>0){
        let tmp = priorities.shift();
        let hasMax = priorities.some((el)=>el>tmp);
        if(hasMax){
            priorities.push(tmp);
            tmp = arr.shift();
            arr.push(tmp);
        }
        else{
            if(arr[0][1]===location) return cnt;
            else{
                arr.splice(0,1);
                cnt++;
            }
        }
    }
}