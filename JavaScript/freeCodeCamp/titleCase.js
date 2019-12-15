function titleCase(str) {
  return str
    .split(' ')
    .map((c, i, a) => {
      return c.slice(0, 1).toUpperCase() + c.slice(1, c.length).toLowerCase();
    })
    .join(' ');
}

console.log(titleCase("I'm a little tea pot"));
