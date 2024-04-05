function solution(brown, yellow) {
  for (let i = 1; i <=Math.ceil(yellow / 2); i++) {
    if (yellow % i === 0) {
      if ((yellow / i) * 2 + i * 2 + 4 === brown)
        return [yellow / i + 2, i + 2];
    }
  }
}