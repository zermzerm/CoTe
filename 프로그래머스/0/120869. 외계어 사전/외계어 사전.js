function solution(spell, dic) {
  let s = spell.sort().join("");
  for (let i = 0; i < dic.length; i++) {
    if (s === dic[i].split('').sort().join("")) return 1;
  }
  return 2;
}