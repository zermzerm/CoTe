function solution(rank, attendance) {
  // const answer = [];
  // for (let i = 1; i <= rank.length; i++) {
  //   if (answer.length === 3) break;
  //   if (attendance[rank.indexOf(i)]) answer.push(rank.indexOf(i));
  // }
  // return answer[0] * 10000 + answer[1] * 100 + answer[2];
    
    // let filteredRank = rank.filter((el,idx)=>attendance[idx]).sort((a,b)=>a-b);
    // return rank.indexOf(filteredRank[0])*10000+100*rank.indexOf(filteredRank[1])+rank.indexOf(filteredRank[2])
    
    let filteredRank = rank.map((a,i)=>[a,i]).filter((_,idx)=>attendance[idx]).sort((a,b)=>a[0]-b[0]);
    return 10000*filteredRank[0][1] + 100*filteredRank[1][1] + filteredRank[2][1]
}