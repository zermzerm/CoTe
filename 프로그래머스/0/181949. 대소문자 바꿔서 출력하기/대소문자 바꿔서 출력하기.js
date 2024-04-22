const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let answer="";
    for(let i=0;i<input[0].length;i++){
        answer += input[0][i]===input[0][i].toUpperCase() ? input[0][i].toLowerCase() : input[0][i].toUpperCase()
    }
    console.log(answer)
});