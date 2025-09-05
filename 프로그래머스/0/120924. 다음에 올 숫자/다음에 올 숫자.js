function solution(common) {
  // if (common[1] - common[0] === common[2] - common[1])
  //   return common.at(-1) + common[1] - common[0];
  // else return common.at(-1) * (common[1] / common[0]);
    
    if(common[1]-common[0]===common[2]-common[1]) return 2*common[common.length-1]-common[common.length-2];
    else return common[common.length-1]**2/common[common.length-2]
}