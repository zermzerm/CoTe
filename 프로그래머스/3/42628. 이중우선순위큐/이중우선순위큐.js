function solution(operations) {
    const queue = [];
    for(let i=0;i<operations.length;i++){
        switch(operations[i].includes("I")){               
            case true :
                queue.push(+operations[i].slice(2));
                break;
            case false : 
                if(operations[i].includes("-1")){
                   if(queue.length>0){
                       queue.splice(queue.indexOf(Math.min(...queue)),1)
                   }
                }
                else{
                    if(queue.length>0){
                       queue.splice(queue.indexOf(Math.max(...queue)),1)
                   }
                }
                break;
        }
    }
    return queue.length >0 ? [Math.max(...queue),Math.min(...queue)] : [0,0]
}