function calcMin(a,b){
    const dateA = new Date(`2024/11/08 ${b}`);
    const dateB = new Date(`2024/11/08 ${a}`);
    const diffMSec = dateA.getTime() - dateB.getTime();
    return diffMSec/(60*1000)
}

function solution(fees, records) {
    const splitRecords = records.map((el)=>el.split(" ")).sort((a,b)=>a[1]-b[1]);
    const stack = [];
    const answer = [];
    let sum = 0;
    function calcMoney(money){
        return money<fees[0] ? fees[1] : Math.ceil((money-fees[0])/fees[2])*fees[3]+fees[1];
    }
    for(let i=0; i<splitRecords.length; i++){
        if(stack.length===0 && splitRecords[i][2]==='IN'){
            stack.push(splitRecords[i][0])
        }
        else if(stack.length===1 && splitRecords[i][2]==='OUT'){
            sum += calcMin(stack.pop(),splitRecords[i][0]);
            if(i===splitRecords.length-1||splitRecords[i][1]!==splitRecords[i+1][1]){
                answer.push(calcMoney(sum));
                sum = 0;
            }
        }
        else if(stack.length===1 && splitRecords[i][2]==='IN'){
            sum += calcMin(stack.pop(),"23:59");
            answer.push(calcMoney(sum));
            sum = 0;
            stack.push(splitRecords[i][0]);
        }
    }
    if(stack.length!==0){
        sum += calcMin(stack.pop(),"23:59");
        answer.push(calcMoney(sum));
    }
    return answer
}