function solution(brown, yellow) {
    for(let i=1; i<=yellow;i++){
        if(yellow%i===0){
            if(brown-4===i*2+yellow/i*2) return [yellow/i+2,i+2]
        }
    }
}