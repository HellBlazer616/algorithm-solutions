function chunkArrayInGroups(arr, size) {
  let ans = new Array();
  let length = arr.length;
  do {
    ans.push(arr.splice(0, size));
    length = arr.length;
  } while (length > 0);
  return ans;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
