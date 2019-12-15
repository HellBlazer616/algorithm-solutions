function booWho(bool) {
  return typeof bool === typeof true ? true : false;
}

console.log(booWho(null));
