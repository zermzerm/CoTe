function solution(participant, completion) {
  let result = new Map();

  participant.map((val) =>
    result.has(val) ? result.set(val, result.get(val) + 1) : result.set(val, 0)
  );
  completion.map(
    (val) => result.has(val) && result.set(val, result.get(val) - 1)
  );

  for (let [key, val] of result) {
    if (val > 1 || val === 0) return key;
  }
}