function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  else {
    let index = num;
    let ans = '';
    do {
      ans += str;
      index--;
    } while (index > 0);

    return ans;
  }
}

console.log(repeatStringNumTimes('abc', 3));
