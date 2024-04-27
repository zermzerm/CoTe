function solution(name, yearning, photo){
    var answer=[];
    for(i=0;i<photo.length;i++){
        var point=0;
        for(j=0;j<name.length;j++){
            var arr=photo[i];
            point+=arr.filter(v=>name[j]===v).length*yearning[j];
        }
        answer.push(point);
    }
    return answer;
}