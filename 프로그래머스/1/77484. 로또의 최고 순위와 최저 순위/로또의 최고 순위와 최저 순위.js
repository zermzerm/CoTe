function solution(lottos, win_nums) {
  lottos.sort((a, b) => b - a);
  let zeroCount = lottos.filter((el) => el === 0).length;
  let sameCount = 0;
  for (let i = 0; i < lottos.length - zeroCount; i++) {
    if (win_nums.includes(lottos[i])) sameCount++;
  }
  if (zeroCount === 6 && sameCount === 0) return [1, 6];
  return [
    7 - (sameCount + zeroCount) > 6 ? 6 : 7 - (sameCount + zeroCount),
    7 - sameCount > 6 ? 6 : 7 - sameCount,
  ];
}