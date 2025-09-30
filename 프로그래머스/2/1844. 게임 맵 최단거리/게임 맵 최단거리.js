function solution(maps) {
    const cols = maps[0].length;
    const rows = maps.length;
    const directions = [[-1,0],[1,0],[0,-1],[0,1]];
    const visited = Array.from({length : rows}, ()=>Array(cols).fill(false));
    visited[0][0]=true;
    const query = [[0,0,1]]
    
   while(query.length>0){
        const [curRow, curCol, dist] = query.shift();
        if(curRow===rows-1&&curCol===cols-1) return dist;
        for(let [dr,dc] of directions){
            const newRow = curRow + dr;
            const newCol = curCol + dc;
            if(newRow<=rows-1&&newRow>=0&&newCol<=cols-1&&newCol>=0&&!visited[newRow][newCol]&&maps[newRow][newCol]===1){
                visited[newRow][newCol]=true;
                query.push([newRow,newCol,dist+1]);
            }
        }
    }
    return -1;
    
    
    
    
//     const rows = maps.length;
//     const cols = maps[0].length;
//     const direct = [[-1,0],[1,0],[0,-1],[0,1]];
//     const visited = Array.from({length:rows},()=>Array(cols).fill(false));
//     visited[0][0] = true;
//     const query = [[0,0,1]];
    
//     while(query.length>0){
//         const [curRow, curCol, dist] = query.shift();
//         if(curRow===rows-1 &&curCol===cols-1) return dist
//         for(let i=0;i<direct.length;i++){
//             let nextRow = curRow + direct[i][0];
//             let nextCol = curCol + direct[i][1];
//             if(nextRow>=0&&nextCol>=0&&nextRow<rows &&nextCol<cols && maps[nextRow][nextCol]===1&&!visited[nextRow][nextCol]){
//                 visited[nextRow][nextCol] = true;
//                 query.push([nextRow,nextCol,dist+1]);
//             }
//         }
//     }
//     return -1;
    
    
    
  // // 총 행렬
  // let rows = maps.length;
  // let cols = maps[0].length;
  // // 상하좌우
  // const directions = [
  //   [-1, 0],
  //   [1, 0],
  //   [0, -1],
  //   [0, 1],
  // ];
  // // 방문한곳 변수
  // // const visited = Array(rows).fill(Array.from({ length: cols }, () => false)); -> 오류
  // const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  // // 현재 진행 상태 변수 [현재행,현재열,현재거리]
  // const queue = [[0, 0, 1]];
  // visited[0][0] = true;
  // // BFS 시작
  // while (queue.length > 0) {
  //   const [curRow, curCol, dist] = queue.shift();
  //   // 행렬의 끝의 위차(도착지점)에 도착하면 총 거리 dist return
  //   if (curRow === rows - 1 && curCol === cols - 1) {
  //     return dist;
  //   }
  //   // 그 외에는 시작
  //   for (const [dr, dc] of directions) {
  //     let newRow = curRow + dr;
  //     let newCol = curCol + dc;
  //     if (
  //       newRow >= 0 &&
  //       newRow < rows &&
  //       newCol >= 0 &&
  //       newCol < cols &&
  //       maps[newRow][newCol] ===1 && !visited[newRow][newCol]
  //     ) {
  //       visited[newRow][newCol] = true;
  //       queue.push([newRow, newCol, dist + 1]);
  //     }
  //   }
  // }
  // return -1;
}