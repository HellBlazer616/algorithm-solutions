// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
	// Drop them elements.
	let check = false;
	return arr.reduce((acc, value) => {
		if (func(value) === true || check) {
			acc.push(value);
			check = true;
		}
		return acc;
	}, []);
}

const ans = dropElements([0, 1, 0, 1], function(n) {
	return n === 1;
});

console.log(ans);
