function solution(my_string) {
  let arr = my_string.split(" ");
  let tmp = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] === "+" ? (tmp += +arr[i + 1]) : (tmp -= +arr[i + 1]);
    i++;
  }
  return tmp;
    
//     let calc = my_string.split("").filter((el)=>el!==' ')

//     let tmp=calc[0]
//     let sign = 1;
//     for(let i=1;i<calc.length;i++){
//         if(!isNaN(+calc[i])){
//             tmp+=calc[i]
//         }
//         else if(calc[i]==='+'){
//             sign = 1;
//         }
//         else{
//             sign = 0;
//         }
//     }
}