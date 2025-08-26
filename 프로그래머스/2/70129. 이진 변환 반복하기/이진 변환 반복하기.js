function solution(s) {
  // let cnt = 0;
  // let zeroCnt = 0;
  // while (!(s === "1")) {
  //   while (s.includes("0")) {
  //     s = s.replace("0", "");
  //     zeroCnt++;
  //   }
  //   s = s.length.toString(2);
  //   cnt++;
  // }
  // return [cnt, zeroCnt];
    let cnt = [0,0];
    while(s!=="1"){
        if(s.includes("0")) cnt[1]+=s.match(/0/g).length;
        s = s.split("0").join("")
        // while(s.includes("0")){
        //     s = s.replace("0","");
        //     cnt[1]++;
        // }
        s = s.length.toString(2);
        cnt[0]++
    }
    return cnt
}