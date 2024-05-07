function solution(polynomial) {
    let exp = polynomial.split(" "),xArr=[],NumArr=[],xNum=0,num=0;
    exp.forEach((el)=>{
        if(el.match('x')){
            console.log(el.slice(el.length-1,1));
            el.length===1?xNum+=1:xNum+=Number(el.replace('x',''));
        }
        else if(el!=='+'){
            num+=Number(el);
        }
    });
    if(xNum==1){
        xNum='';
    }
    if(xNum===0){
        return `${num}`;
    }
    else if(num===0){
        return `${xNum}x`
    }
    else{
       return `${xNum}x + ${num}`
    }
}