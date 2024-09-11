function solution(emergency) {
    const arr = [...emergency].sort((a,b)=>b-a);
    console.log(arr,emergency)
    return emergency.map((el,idx)=>arr.indexOf(el)+1)
}