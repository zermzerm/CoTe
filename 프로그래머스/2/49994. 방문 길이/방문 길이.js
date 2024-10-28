function solution(dirs) {
    const direction = [[0,1],[0,-1],[-1,0],[1,0]]
    const coordinate = [];
    let location = [0,0];
    for(let i=0;i<dirs.length;i++){
        let tmp = [];
        tmp.push(...location)
        switch(dirs[i]){
            case "U" :
                if(location[1]===5) break;
                location[0] += direction[0][0];
                location[1] += direction[0][1];
                tmp.push(...location)
                break;
            case "D" :
                if(location[1]===-5) break;
                location[0] += direction[1][0];
                location[1] += direction[1][1];
                tmp.unshift(...location)
                break;
            case "L" :
                if(location[0]===-5) break;
                location[0] += direction[2][0];
                location[1] += direction[2][1];
                tmp.push(...location)
                break;
            case "R" :
                if(location[0]===5) break;
                location[0] += direction[3][0];
                location[1] += direction[3][1];
                tmp.unshift(...location)
                break;
        }
        if(tmp.length===4&&(tmp[0]!==tmp[2]||tmp[1]!==tmp[3])) coordinate.push(tmp);
    }
    // console.log(location)
    // console.log(coordinate)
    // console.log(Array.from(new Set(coordinate.map(JSON.stringify))).map(JSON.parse))
   return Array.from(new Set(coordinate.map(JSON.stringify))).map(JSON.parse).length
}