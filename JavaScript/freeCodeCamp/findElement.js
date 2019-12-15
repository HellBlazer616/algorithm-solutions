function findElement(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index])) return arr[index];
    else continue;
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
