const solution = (n) => {
  let arr = n.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let tmpArr = arr[i].split('');
    for (let j = 0; j < tmpArr.length; j++) {
      j % 2 === 0
        ? tmpArr.splice(j, 1, tmpArr[j].toUpperCase())
        : tmpArr.splice(j, 1, tmpArr[j].toLowerCase());
    }
    arr[i] = tmpArr.join('');
  }
  return arr.join(' ');
};