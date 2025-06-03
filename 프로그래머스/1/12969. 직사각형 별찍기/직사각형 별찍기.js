process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
// let a = data.split(" ");
//     let answer = Array(+a[1]).fill("*".repeat(a[0]))
//     console.log(answer.join("\n"))
    let arr = data.split(" ");
    for(let i=0;i<arr[1];i++){
        console.log('*'.repeat(arr[0]))
    }
});