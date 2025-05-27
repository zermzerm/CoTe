const eng = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
};

const solution = (numbers) => {
  // let answer = "";
  // let letter = "";
  // for (let i = 0; i < numbers.length; i++) {
  //   letter += numbers[i];
  //   if (eng[letter]) {
  //     answer += eng[letter];
  //     letter = "";
  //   }
  // }
  // return +answer;
    
    let tmp ='';
    let answer = '';
    for(let i=0;i<numbers.length;i++){
        tmp+=numbers[i]
        if(eng[tmp]){
            answer+=eng[tmp];
            tmp='';
        }
    }
    return +answer
};