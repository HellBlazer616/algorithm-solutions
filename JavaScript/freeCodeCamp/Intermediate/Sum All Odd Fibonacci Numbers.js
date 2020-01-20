// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function fibonacci(num) {
	const fibonacciNumbers = [];
	fibonacciNumbers[0] = 1;
	fibonacciNumbers[1] = 1;

	for (let i = 2; i <= num; i++) {
		let temp = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
		if (temp <= num) fibonacciNumbers[i] = temp;
		else break;
	}

	return fibonacciNumbers;
}
function sumFibs(num) {
	const arr = fibonacci(num);
	return arr.reduce((acc, value) => {
		if (value % 2 !== 0) acc += value;
		return acc;
	}, 0);
}

console.log(fibonacci(75025));
