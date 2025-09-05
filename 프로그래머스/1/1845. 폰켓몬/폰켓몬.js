const solution = (nums) => {
  // return [...new Set(nums)].reduce(
  //   (acc, _, idx) => (idx + 1 <= nums.length / 2 ? acc + 1 : acc),
  //   0
  // );
    
    let dedupliNumsLeng = new Set(nums).size;
    let leng = nums.length/2;
    return dedupliNumsLeng > leng ? leng : dedupliNumsLeng;
    // 1 2 3 4 5 6
    // leng = 3
    // 1 1 1 2 2 2 , leng 3
};