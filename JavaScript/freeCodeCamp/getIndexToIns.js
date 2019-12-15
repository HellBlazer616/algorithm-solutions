function getIndexToIns(arr, num) {
  if (arr.length === 0) return 0;
  let ans = arr.sort((a, b) => a - b);

  for (let index = 0; index < ans.length; index++) {
    if (ans[index] < num) continue;
    else if (ans[index] === num) return index;
    else if (ans[index] > num) return index;
    else return 1;
  }

  return ans.length;
}

console.log(getIndexToIns([2, 5, 10], 15));
