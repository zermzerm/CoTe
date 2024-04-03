const solution = (sizes) => {
  const arr = sizes.map((el) => el.sort((a, b) => b - a));
  return (
    arr.sort((a, b) => b[0] - a[0])[0][0] *
    arr.sort((a, b) => b[1] - a[1])[0][1]
  );
};