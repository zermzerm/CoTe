function solution(arr1, arr2) {
    return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : arr1.reduce((acc,cur)=>acc+cur,0) > arr2.reduce((acc,cur)=>acc+cur,0) ? 1 :  arr1.reduce((acc,cur)=>acc+cur,0) < arr2.reduce((acc,cur)=>acc+cur,0) ? -1 : 0
}