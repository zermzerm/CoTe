function solution(my_string, queries) {
    // var arr = my_string.split("");
    // for(let i=0;i<queries.length;i++){
    //     var answer=[];
    //     for(let j=queries[i][0];j<queries[i][1]+1;j++){
    //         answer.push(arr[j]);
    //     }
    //     answer.reverse();
    //     for(let j=0;j<answer.length;j++){
    //         arr.splice(queries[i][0]+j,1,answer[j]);
    //     }
    // }
    // return arr.join("");
    let tmpChar = '';
    for (let i=0;i<queries.length;i++){
        // console.log(my_string.slice(queries[i][0],queries[i][1]));
        my_string = my_string.slice(0,queries[i][0])+my_string.slice(queries[i][0],queries[i][1]+1).split("").reverse().join("")+my_string.slice(queries[i][1]+1)
        
    }
    return my_string;
}