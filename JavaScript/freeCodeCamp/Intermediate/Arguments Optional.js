// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
	if (arguments.length === 1 && Number.isInteger(arguments[0])) {
		const firstArgument = arguments[0];
		return function(number) {
			return Number.isInteger(number)
				? firstArgument + number
				: undefined;
		};
	} else if (
		arguments.length === 2 &&
		Number.isInteger(arguments[0]) &&
		Number.isInteger(arguments[1])
	)
		return arguments[0] + arguments[1];
	else return undefined;
}

const ans = addTogether(2, 3);

console.log(Number.isInteger([3]));
