const findLongestWordLength = str => {
  return Math.max(
    ...str.split(' ').map(value => {
      return value.length;
    })
  );
};

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
