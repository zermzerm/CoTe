function compare(a, b, n) {
  if (a[n] === undefined || b[n] === undefined) return a.length - b.length;
  if (a[n] === b[n]) {
    return a.localeCompare(b);
  } else {
    return a[n].charCodeAt() - b[n].charCodeAt();
  }
}

function solution(strings, n) {
  return strings.sort((a, b) => compare(a, b, n));
}