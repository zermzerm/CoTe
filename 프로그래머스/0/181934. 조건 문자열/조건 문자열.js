function solution(ineq, eq, n, m) {
    // return eq==="=" ? ineq ==="<" ? +(n<=m) : +(n>=m): ineq ==="<" ? +(n<m) : +(n>m);
    
    return ineq === "<" ? eq === "=" ? (n <= m ? 1 : 0 ) : ( n < m ? 1 : 0 ) : eq === "=" ? (n >= m ? 1 : 0 ) : ( n > m ? 1 : 0 )
}