function solution(record) {
    const answer = [];
    const idObj = {};
    const splitRecord = record.map((el)=>el.split(" "));
    // console.log(splitRecord)
    for(let i=0;i<splitRecord.length;i++){
        if(splitRecord[i][0]==='Enter'){
            idObj[splitRecord[i][1]]=splitRecord[i][2];
            // answer.push(`${idObj[splitRecord[i][1]]}님이 들어왔습니다.`);
        }
        if(splitRecord[i][0]==='Leave'){
            // answer.push(`${idObj[splitRecord[i][1]]}님이 나갔습니다.`);
        }
        if(splitRecord[i][0]==='Change'){
            idObj[splitRecord[i][1]]=splitRecord[i][2];
        }
    }
    for(let i=0;i<splitRecord.length;i++){
        if(splitRecord[i][0]==='Enter'){
            answer.push(`${idObj[splitRecord[i][1]]}님이 들어왔습니다.`);
        }
        if(splitRecord[i][0]==='Leave'){
            answer.push(`${idObj[splitRecord[i][1]]}님이 나갔습니다.`);
        }
    }
    return answer
}