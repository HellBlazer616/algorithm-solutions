function mutation(arr) {
  let data = arr.map(value => value.toLowerCase());

  let needles = data[1].split('');

  let haystack = data[0];

  let truth = data[1].length;
  needles.forEach(needle => {
    if (haystack.includes(needle)) truth -= 1;
  });

  return truth === 0;
}

console.log(mutation(['hello', 'Hello']));
