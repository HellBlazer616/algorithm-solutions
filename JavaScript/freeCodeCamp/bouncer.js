function bouncer(arr) {
  console.log(typeof NaN);
  return arr.filter((c, i, a) => {
    if (c) return c;
  });
}

console.log(bouncer([7, 'ate', '', false, 9]));
