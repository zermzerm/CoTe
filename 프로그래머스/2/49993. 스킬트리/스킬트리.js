function solution(skill, skill_trees) {
    let cnt = 0;
    const stack = [];
    const answer = [];
    for(let i=0;i<skill_trees.length;i++){
        let tmp = '';
        for(let j=0;j<skill_trees[i].length;j++){
            if(skill.includes(skill_trees[i][j])){
                tmp+=skill_trees[i][j]
            } 
        }
        stack.push(tmp)
    }
    // console.log(stack)
    return stack.filter((el)=>el===''||(skill.includes(el)&&el.includes(skill[0]))).length
}