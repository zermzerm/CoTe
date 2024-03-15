function solution(spell, dic) {
  let com = spell.sort();
  for (let i = 0; i < dic.length; i++) {
    let arr = dic[i].split('').sort();
    if (com.toString() === arr.toString()) return 1;
  }
  return 2;
}