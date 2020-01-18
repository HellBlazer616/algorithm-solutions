function f(n) {
	if (n <= 0 || typeof n !== typeof 1 || !Number.isInteger(n)) return false;

	if (n === 0) return n;
	else return n + f(n - 1);
}

console.log(f(100));
console.log(typeof 1);
