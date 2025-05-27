const solution = (s) => {
  // const arr = s.split('');
  // if (s.length === 4 || s.length === 6) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (isNaN(arr[i])) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // return false;
    
    if(s.length===4 || s.length===6){
       for(let i=0;i<s.length;i++){
           if(isNaN(s[i])) return false
       }
        return true
    }
    else return false
};