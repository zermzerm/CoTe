function solution(numbers) {
  const answer = numbers
    .sort((a, b) => String(b) + String(a) - (String(a) + String(b)))
    .join('');
  return +answer === 0 ? '0' : answer;
}