function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false;

  return Date.parse(currentDate) > Date.parse(expirationDate) ? false : true;
}

console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015'));
