function openOrSenior(data) {
  return data.map(datum => {
    if (datum[0] >= 55 && datum[1] > 7) return "Senior";

    return "Open";
  });
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
  ])
);
