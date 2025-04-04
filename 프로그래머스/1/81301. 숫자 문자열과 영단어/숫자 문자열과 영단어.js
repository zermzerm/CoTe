const obj = {'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,}
function solution(s){
    let tmp = '';
    let answer = '';
    for(let i=0;i<s.length;i++){
        if(isNaN(s[i])){
            tmp+=s[i];
            if(!isNaN(obj[tmp])){    
                answer +=obj[tmp];
                tmp='';
            }
        }
        else{
            answer +=s[i];
        }
    }
    return +answer;
}