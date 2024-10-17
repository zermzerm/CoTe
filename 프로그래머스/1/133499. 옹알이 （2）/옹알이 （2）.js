function solution(babbling) {
    const arr = ["aya","ye","woo","ma"];
    const regex = new RegExp(arr.join('|'), 'g');
    const double = arr.map((el)=>el+el);
    const regexDouble = new RegExp(double.join('|'), 'g');
    const reBabbling = babbling.filter((el)=>el.match(regexDouble)===null);
    return reBabbling.map((el)=>el.split(regex).filter(Boolean)).filter((el)=>el.length===0).length
    // console.log(answer);
    // for(let i=0;i<reBabbling.length;i++){
    //     console.log(reBabbling[i].match(regex))
    // }

    // while(true){
    //     for(let i=0;i<babbling.length;i++){
    //         for(let j=0;)
    //     }
    // }
}

//double -> [ 'ayaaya', 'yeye', 'woowoo', 'mama' ]

//babbling -> el = ayaye