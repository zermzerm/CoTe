const solution = (participant, completion) => {
  let obj = new Map();
  for (let i = 0; i < participant.length; i++) {
    obj.has(participant[i])
      ? obj.set(participant[i], obj.get(participant[i]) + 1)
      : obj.set(participant[i], 1);
  }
  for (let i = 0; i < completion.length; i++) {
    obj.set(completion[i], obj.get(completion[i]) - 1);
    if (obj.get(completion[i]) === 0) obj.delete(completion[i]);
  }
  return [...obj].flat()[0];
};