function solution(a, b, c) {
    const arr = [a,b,c];
    const setArr = [...new Set(arr)]
    return setArr.length === 3 ? a+b+c : setArr.length=== 2 ? (a+b+c)*(a**2+b**2+c**2) : (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
}