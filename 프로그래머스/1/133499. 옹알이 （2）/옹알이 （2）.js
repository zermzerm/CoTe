function solution(babbling) {
    const aya = ["aya","ye", "woo", "ma"];
    let cnt = 0;
    for(let i=0;i<babbling.length;i++){
        let str = "";
        let tmpAya = [...aya]
        for(let j=0;j<babbling[i].length;j++){
            str+=babbling[i][j];
            if(tmpAya.indexOf(str)!==-1){
                tmpAya = [...aya].filter((el)=>el!==str);
                str="";
                babbling[i] = babbling[i].slice(j+1);
                j=-1;
                if(babbling[i]==""){
                    cnt++;
                    continue;
                }
            }
        }
    }
    return cnt;
    // for(let i=0;i<babbling.length;i++){
    //     let tmpAya = [...aya];
    //     for(let j=0;j<tmpAya.length;j++){
    //         if(babbling[i].includes(tmpAya[j])){
    //             console.log(babbling[i], tmpAya[j],tmpAya)
    //             babbling[i] = babbling[i].replace(tmpAya[j],"");
    //             tmpAya = [...aya].filter((el)=>el!==tmpAya[j]);
    //             j=-1;
    //             console.log(babbling[i], tmpAya)
    //             if(babbling[i]===""){
    //             cnt++;
    //             continue;
    //         }
    //         }
    //     }
    
    
    
    
    
    
    
    // const arr = ["aya","ye","woo","ma"];
    // const regex = new RegExp(arr.join('|'), 'g');
    // const double = arr.map((el)=>el+el);
    // const regexDouble = new RegExp(double.join('|'), 'g');
    // const reBabbling = babbling.filter((el)=>el.match(regexDouble)===null);
    // return reBabbling.map((el)=>el.split(regex).filter(Boolean)).filter((el)=>el.length===0).length
}