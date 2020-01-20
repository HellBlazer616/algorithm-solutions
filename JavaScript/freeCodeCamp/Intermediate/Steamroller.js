// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	// I'm a steamroller, baby
	return arr.reduce((acc, value) => {
		return acc.concat(Array.isArray(value) ? steamrollArray(value) : value);
	}, []);
}

const ans = steamrollArray([1, [2], [3, [[4]]]]);

console.log(ans);
