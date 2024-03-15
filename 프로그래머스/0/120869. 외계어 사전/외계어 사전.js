function solution(spell, dic) {
  let 스펠종민 = spell.sort();
  for (let 아이종민 = 0; 아이종민 < dic.length; 아이종민++) {
    if (스펠종민.toString() === dic[아이종민].split('').sort().toString()) return 1;
  }
  return 2;
}