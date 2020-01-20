// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumPrimes(num) {
	let ans = 0;
	for (let index = 0; index <= num; index++) {
		if (isPrime(index)) ans += index;
	}
	return ans;
}

function isPrime(num) {
	if (num <= 1) return false;
	if (num <= 3) return true;
	if (num % 2 == 0 || num % 3 == 0) return false;
	for (let index = 5; index * index <= num; index += 6) {
		if (num % index == 0 || num % (index + 2) == 0) return false;
	}

	return true;
}

sumPrimes(10);

console.log(sumPrimes(977));
