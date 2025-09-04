function solution(quiz) {
    // let answer=[];
    // for(let i=0;i<quiz.length;i++){
    //     quiz[i] = quiz[i].replace('=','==');
    //     eval(quiz[i]) ? answer.push("O") :answer.push("X");
    // }
    // return answer;
    
    let answer = [];
    for(let i=0;i<quiz.length;i++){
        let formula = quiz[i].split(" ");
        let sum = +formula[0];
        formula[1] === '-' ? sum-=+formula[2] : sum+=+formula[2];
        answer.push(sum===+formula.at(-1) ? "O" : "X")
    }
    return answer;
}