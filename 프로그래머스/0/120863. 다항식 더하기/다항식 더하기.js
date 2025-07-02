// function calc(prev, num) {
// //   if (prev === "+") return +num;
// //   else if (prev === "-") return -num;
// //   else return +num;
// // }

function solution(polynomial) {
//   const arr = polynomial.split(" ");
//   let xValue = 0,
//     numValue = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes("x")) {
//       let num = +arr[i].replace(/[^0-9]/g, "");
//       if (num === 0) num = 1;
//       xValue += calc(arr[i - 1], num);
//     } else if (Number.isInteger(+arr[i])) {
//       let num = +arr[i];
//       numValue += calc(arr[i - 1], num);
//     }
//   }
//       if (xValue === 1) xValue = "";
//   if (xValue === 0)
//     return `${numValue}`;
//   if (numValue === 0)
//     return`${xValue}x`;
//   return `${xValue}x ${
//     numValue < 0 ? "- " + Math.abs(numValue) : "+ " + numValue
//   }`;
    
    let xCnt = 0;
    let numCnt = 0;
    let sortedPoly = polynomial.split(" ").join("").split("+");
    for(let i=0;i<sortedPoly.length;i++){
        if(sortedPoly[i].includes("x")){
            let replacePoly = sortedPoly[i].replace("x","");
            replacePoly==="" ? xCnt++ : xCnt+=+replacePoly;
        }
        else{
            numCnt += +sortedPoly[i];
        }
    }
    if(xCnt===0) return `${numCnt}`
    return `${xCnt===1 ? "" : xCnt}x`+`${numCnt===0 ? "" : ` + ${numCnt}`}`;
}