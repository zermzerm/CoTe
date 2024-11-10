function solution(record) {
    const answer = [];
    const idObj = {};
    const splitRecord = record.map((el)=>el.split(" "));
    for(let i=0;i<splitRecord.length;i++){
        if(splitRecord[i][0]==='Enter' || splitRecord[i][0]==='Change') idObj[splitRecord[i][1]]=splitRecord[i][2];
    }
    for(let i=0;i<splitRecord.length;i++){
        if(splitRecord[i][0]==='Enter'||splitRecord[i][0]==='Leave'){
            answer.push(`${idObj[splitRecord[i][1]]}님이 ${splitRecord[i][0]==='Enter' ? '들어왔습니다.' : '나갔습니다.'}`);
        }
    }
    return answer;
}